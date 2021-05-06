import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Log } from '../services/Log'


class HostInfo extends Component {
  state = {
    options: [
      {key: "high_plains", text: "High Plains", value: "high_plains"},
      {key: "lowlands", text: "Lowlands", value: "lowlands"},
      {key: "under_construction", text: "Under Construction", value: "under_construction"},
      {key: "pariah", text: "Pariah", value: "pariah"},
      {key: "python_pass", text: "Python Pass", value: "python_pass"},
      {key: "badlands", text: "Badlands", value: "badlands"}
    ],
    value: this.props.selected.area
  }

  handleChange = (e, {value}) => {
    const host = this.props.selected
    const area = value.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    const change = () => {
      this.props.changeArea(value)
      this.setState({value: value})
      this.props.updateLog(Log.notify(`${host.firstName} set in area ${area}`))
    }
    let activeHosts = this.props.hosts.filter(host => host.area === value).length
    let limit = this.props.areas.find(area => area.name === value).limit
    activeHosts < limit ? change() : this.props.updateLog(Log.error(`Too many hosts. Cannot add ${host.firstName} to ${area} `))
  }

  render(){
    const host = this.props.selected
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {host.firstName} | { host.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={() => this.props.changeActive(this.state.value)}
                  label={host.active ? "Active" : "Decommisioned"}
                  checked={host.active ? true : false}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={host.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
