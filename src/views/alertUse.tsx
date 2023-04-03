import React from 'react'

import Alert, { AlertType } from '../compontentsBasic/Alert/alert'

import '../styles/index.scss'
import '../App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Alert alertType={AlertType.Success} message="success Tips" />
      <p className="block" />
      <Alert alertType={AlertType.Default} message="Default Tips" />
      <p className="block" />
      <Alert alertType={AlertType.Error} message="Error Tips" />
      <p className="block" />
      <Alert alertType={AlertType.Warning} message="Warning Tips" />
      <p className="block" />
      <Alert alertType={AlertType.Warning} title="标题" message="Warning Tips" />
      <p className="block" />
      <Alert alertType={AlertType.Error} showIcon message="Error Tips" close />
      <p className="block" />
      <Alert alertType={AlertType.Warning} closeText="close" title="sss" showIcon message="Error Tips" />
    </div>
  )
}

export default App
