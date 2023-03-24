import React from 'react'

import './styles/index.scss'
import './App.css'

import Button, { ButtonType, ButtonSize } from './compontents/Button/button'
import Alert, { AlertType } from './compontents/Alert/alert'

const App: React.FC = () => {
  return (
    <div className="App">
      {' '}
      <li> --------------Button---------------- </li>
      <Button btnType={ButtonType.Primary}>1111</Button>
      <Button btnType={ButtonType.Defalut} size={ButtonSize.Large}>
        www
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Large} href="http:baidu">
        百度
      </Button>
      <li> --------------Alert---------------- </li>
      <Alert alertType={AlertType.Info}>提示</Alert>
    </div>
  )
}

export default App
