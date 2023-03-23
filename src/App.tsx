import React from 'react'
import './styles/index.scss'

import Button, { ButtonType, ButtonSize } from './compontents/Button/button'

const App: React.FC = () => {
  return (
    <div className="aa">
      <Button btnType={ButtonType.Primary}>1111</Button>
      <Button btnType={ButtonType.Defalut} size={ButtonSize.Large}>
        www
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Large} href="http:baidu">
        百度
      </Button>
    </div>
  )
}

export default App
