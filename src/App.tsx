import React from 'react'

import './styles/index.scss'
import './App.css'

import Button, { ButtonType, ButtonSize } from './compontentsBasic/Button/button'
import AlertUse from './views/alertUse'
import ButtonUse from './views/buttonUse'
import MenuUse from './views/menuUse'
import TextRoll from './compontentsBasic/TextRoll'
import AuseState from './hooks/useState'

const App: React.FC = () => {
  return (
    <div className="App">
      <AuseState />
      {/* <TextRoll />
      <li> --------------BaseMenu---------------- </li>
      <MenuUse />
      <li> --------------BaseButton---------------- </li>
      <ButtonUse />
      <li> --------------BaseAlert---------------- </li>
      <AlertUse /> */}
    </div>
  )
}

export default App
