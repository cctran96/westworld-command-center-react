import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = ({hosts, selected, areas, changeSelectedHost}) => {
  const filteredHosts = hosts.filter(host => !host.active)
  return(
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>

        <HostList hosts={filteredHosts} selected={selected} changeSelectedHost={changeSelectedHost}/>

      </Segment>
    </Segment.Group>
  )
}

export default ColdStorage
