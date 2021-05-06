import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

class Headquarters extends Component {

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

          <ColdStorage 
            hosts={this.props.hosts} 
            selected={this.props.selected} 
            changeSelectedHost={this.props.changeSelectedHost}
          />

        </Grid.Column>
        <Grid.Column width={5}>

          <Details 
            changeActive={this.props.changeActive} 
            hosts={this.props.hosts} areas={this.props.areas} 
            changeArea={this.props.changeArea} 
            selected={this.props.selected}
            updateLog={this.props.updateLog}
          />

        </Grid.Column>
        <Grid.Column width={3}>

          <LogPanel 
            activate={this.props.activate} 
            activateAll={this.props.activateAll} 
            allLogs={this.props.logs}
          />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
