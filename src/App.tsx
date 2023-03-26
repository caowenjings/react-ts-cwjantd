import React from 'react'

import './styles/index.scss'
import './App.css'

import Button, { ButtonType, ButtonSize } from './compontentsBasic/Button/button'
import Alert, { AlertType } from './compontentsBasic/Alert/alert'

const App: React.FC = () => {
  return (
    <div className="App">
      <li> --------------Button---------------- </li>
      <div className="list">
        <Button btnType={ButtonType.Defalut}>Defalut</Button>
        <p className="block" />
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <p className="block" />
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Link} href="http:baidu">
          Link
        </Button>
        <p className="block" />
      </div>
      <div className="list">
        <Button btnType={ButtonType.Defalut} size={ButtonSize.Default}>
          Defalut
        </Button>
        <p className="block" />
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <p className="block" />
        <Button btnType={ButtonType.Link} href="http:baidu" size={ButtonSize.Small}>
          Small Link
        </Button>
        <p className="block" />
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
