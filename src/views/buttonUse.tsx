import React from 'react'

import '../styles/index.scss'
import '../App.css'

import Button, { ButtonType, ButtonSize } from '../compontentsBasic/Button/button'

const App: React.FC = () => {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
