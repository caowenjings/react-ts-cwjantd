import React from 'react'

import './styles/index.scss'
import './App.css'

import Button, { ButtonType, ButtonSize } from './compontentsBasic/Button/button'
import Alert, { AlertType } from './compontentsBasic/Alert/alert'

const App: React.FC = () => {
  return (
    <div className="App">
      <li> --------------Button---------------- </li>
      <div>
        <Button btnType={ButtonType.Defalut}>Defalut</Button>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Link} href="http:baidu">
          Link
        </Button>
      </div>
      <div>
        <Button btnType={ButtonType.Defalut} size={ButtonSize.Default}>
          Defalut
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Link} href="http:baidu" size={ButtonSize.Small}>
          Small Link
        </Button>
      </div>
      <div>
        <Button btnType={ButtonType.Link} disabled>
          disabled Link
        </Button>
      </div>
      <li> --------------Alert---------------- </li>
      <Alert alertType={AlertType.Info}>提示</Alert>
    </div>
  )
}

export default App
