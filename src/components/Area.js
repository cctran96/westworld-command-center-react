import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = ({areas, hosts, selected, changeSelectedHost}) => {
  const areaName = name => {
    return name.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  }

  return hosts.length ? areas.map(area => {
    const filteredHosts = hosts.filter(host => host.area === area.name && host.active)
    return (
      <div key={area.id} className='area' id={area.name}>
        <h3 className='labels'>{areaName(area.name)}</h3>
        {filteredHosts.length ? <HostList hosts={filteredHosts} selected={selected} changeSelectedHost={changeSelectedHost}/> : null}
      </div>
    )
  }) : null
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
