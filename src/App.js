import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'
import { Log } from './services/Log'

const areaURL = "http://localhost:3000/areas/"
const hostURL = "http://localhost:3000/hosts/"

class App extends Component {
  state={
    hosts: [],
    areas: [],
    selected: '',
    activate: true,
    logs: []
  }

  componentDidMount(){
    fetch(areaURL).then(r => r.json()).then(areas => this.setState({areas}))
    fetch(hostURL).then(r => r.json()).then(hosts => this.setState({hosts}))
  }

  changeSelectedHost = e => {
    const selected = this.state.hosts.filter(host => host.firstName === e.target.parentNode.id)[0]
    this.setState({selected})
  }

  updateLog = msg => {
    this.setState({logs: [msg, ...this.state.logs]})
  }

  patcher = (body, id) => {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(hostURL + id, config)
    .then(r => r.json())
  }

  changeActive = () => {
    const host = this.state.selected
    const newState = data => {
      this.setState({
        selected: data, 
        hosts: this.state.hosts.map(host => host.id === data.id ? data : host)
      })
      this.updateLog(host.active ? Log.notify(`Decommissioned ${host.firstName}`) : Log.warn(`Activated ${host.firstName}`))
    }
    this.patcher({active: !host.active}, host.id)
    .then(data => newState(data))
  }

  changeArea = value => {
    this.patcher({area: value}, this.state.selected.id)
    .then(data => this.setState({selected: data, hosts: this.state.hosts.map(host => host.id === data.id ? data : host)}))
  }

  activateAll = () => {
    this.state.hosts.forEach(host => this.patcher({active: this.state.activate}, host.id))
    const newHosts = this.state.hosts.map(host => ({...host, active: this.state.activate}))
    this.setState({hosts: newHosts, activate: !this.state.activate})
    this.updateLog(this.state.activate ? Log.warn("Activating all hosts!") : Log.notify("Decommissioning all hosts."))
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap 
          hosts={this.state.hosts} 
          selected={this.state.selected} 
          changeSelectedHost={this.changeSelectedHost} 
          areas={this.state.areas}
          updateLog={this.updateLog}
        />
        <Headquarters 
          hosts={this.state.hosts} 
          selected={this.state.selected} 
          changeSelectedHost={this.changeSelectedHost} 
          areas={this.state.areas} 
          changeActive={this.changeActive} 
          changeArea={this.changeArea}
          activate={this.state.activate}
          activateAll={this.activateAll}
          logs={this.state.logs}
          updateLog={this.updateLog}
        />
      </Segment>
    )
  }
}

export default App;
