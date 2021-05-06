import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({host, selected, changeSelectedHost}) => {

  return(
    <Card
      id={host.firstName}
      className={host.firstName === selected.firstName ? "host selected" : "host"}
      onClick={changeSelectedHost}
      image={host.imageUrl}
      raised
    />
  )
}

export default Host
