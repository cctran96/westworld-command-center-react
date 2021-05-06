import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, selected, changeSelectedHost}) => {
  const card = hosts.map(host => <Host key={host.id} host={host} selected={selected} changeSelectedHost={changeSelectedHost}/>)

  return(
    <Card.Group itemsPerRow={6}>
      {card}
    </Card.Group>
  )
}

export default HostList
