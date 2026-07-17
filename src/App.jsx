import React from 'react'
import Props from './Props'
import List from './List'

const App = () => {
  let name = "Prince"
  let tech = "MERN"
  return (
    <div>
      {/* <Props name1={name} tech1={tech}/> */}
      <List/>
      
    </div>
  )
}

export default App
