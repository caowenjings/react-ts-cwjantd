// alert 出版组件
import React from 'react'
import classNames from 'classnames'
import { spawn } from 'child_process'

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
  let { alertType = AlertType.Default, showIcon, title, children, close = false, message } = props

  // 盒子
  let classesbox = classNames('alert', {
    [`alert-${alertType}`]: alertType
  })
  // 内容
  let classesContent = classNames('ant-alert-content', {
    [`alert-content-${alertType}`]: alertType
  })
  //图标
  let classesIcon = classNames('alert-icon', {
    [`alert-icon-${alertType}`]: alertType,
    [`alert-icon-${alertType}`]: alertType && showIcon
  })

  //关闭
  let classesClose = classNames('alert-close', {})

  let classesMsg = classNames('alert-message', {
    [`alert-message-${alertType}`]: alertType,
    [`alert-message-${alertType}`]: alertType && showIcon
  })

  const handelDel = () => {}

  return (
    <div className={classesbox}>
      <div className="alert-df">
        {showIcon && <span className={classesIcon} />}
        <div className={classesContent}>
          {title && <p>{title}</p>}
          <div className={classesMsg}>{message}</div>
        </div>
      </div>
      {close && (
        <span className={classesClose} onClick={handelDel}>
          关闭
        </span>
      )}
    </div>
  )
}

export default Alert
