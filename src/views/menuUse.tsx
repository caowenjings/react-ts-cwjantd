import React from 'react'

import '../styles/index.scss'
import '../App.css'

import Menu from '../compontentsBasic/Menu/index'
import MenuItem from '../compontentsBasic/Menu/menuItem'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="list">
        <Menu>
          <MenuItem index={0}>第一课</MenuItem>
          <MenuItem index={1} disabled>
            第二课
          </MenuItem>
          <MenuItem index={2}>第三课</MenuItem>
        </Menu>
        <p className="block" />
      </div>
    </div>
  )
}

export default App
