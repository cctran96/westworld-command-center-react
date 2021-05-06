import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

class WestworldMap extends Component {
  render(){
    return (
      <Segment id="map" >
        <Area 
          areas={this.props.areas} 
          hosts={this.props.hosts} 
          selected={this.props.selected} 
          changeSelectedHost={this.props.changeSelectedHost}
        />
      </Segment>
    )
  }
}

export default WestworldMap
