import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = ({selected, hosts, areas, changeActive, changeArea, updateLog}) => {
  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  return(
    <Segment id="details" className="HQComps">
      {selected ? <HostInfo changeActive={changeActive} changeArea={changeArea} hosts={hosts} areas={areas} selected={selected} updateLog={updateLog}/> : renderSomething()}
    </Segment>
  )
}

export default Details
