// alert 出版组件
import React from 'react'
import classNames from 'classnames'

//1.定义四种主题
export enum AlertType {
  Success = 'success',
  Default = 'default',
  Warning = 'warning',
  Error = 'error'
}

export enum AlertIcon {
  Success = 'successImg',
  Info = 'infoImg',
  Warning = 'warningImg',
  Error = 'errorImg'
}

interface AlertProps {
  alertType?: AlertType
  title?: string
  message?: string
  children?: React.ReactNode
  close?: boolean
  showIcon?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  let { alertType = AlertType.Default, showIcon, title, children, close = true, message } = props

  // 盒子
  let classesbox = classNames('alert', {
    [`alert-${alertType}`]: alertType
  })
  // 内容
  let classesContent = classNames('ant-alert-content', {
    [`alert-content-${alertType}`]: alertType
  })

  let classesMsg = classNames('alert-message', {
    [`alert-message-${alertType}`]: alertType,
    [`alert-icon-${alertType}`]: alertType && showIcon
  })

  const handelDel = () => {}

  return (
    <div className={classesbox}>
      {showIcon && <img src="" alt="" />}
      <div className={classesContent}>
        {title && <p>{title}</p>}
        <div className={classesMsg}>{message}</div>
      </div>
      {close && <span onClick={handelDel}>关闭</span>}
    </div>
  )
}

export default Alert
