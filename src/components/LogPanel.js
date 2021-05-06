import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

const LogPanel = ({activate, activateAll, allLogs}) => {

  const dummyLogs = () => {
    let logs = allLogs
    return logs
  }

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {dummyLogs().map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      
      <Button
        fluid
        onClick={activateAll}
        color={activate ? "red" : "grey"}
        content={activate ? "ACTIVATE ALL" : "DECOMMISSION ALL"}
      />
    </Segment>
  )
}

export default LogPanel
