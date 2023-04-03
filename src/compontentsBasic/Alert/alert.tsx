// alert 出版组件
import React, { useRef, useState } from 'react'
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
  closeText?: React.ReactNode
  showIcon?: boolean
  onClose?: () => void
}

//构造函数，干啥的呢，现在还不知道，往下看吧。
function noop() {}

const Alert: React.FC<AlertProps> = (props) => {
  let { alertType = AlertType.Default, showIcon, title, children, close = false, message, closeText, onClose } = props
  let alertRef = useRef(null)
  let [closeing, setCloseing] = useState(false)

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

  // 当closeText传入为true时，将closable设置为true，
  if (closeText) {
    close = true
  }

  //组件内部的点击关闭事件
  const handleClose = (e: any) => {
    e.preventDefault()
    let dom: any = alertRef.current
    dom.style.height = `${dom.offsetHeight}px`
    // 重复一次后才能正确设置 height
    dom.style.height = `${dom.offsetHeight}px`

    //设置完高度之后通过setState来更新状态，关闭alert。
    setCloseing(true)
    onClose && onClose()
  }

  return closeing ? null : (
    <div className={classesbox} ref={alertRef}>
      <div className="alert-df">
        {showIcon && <span className={classesIcon} />}
        <div className={classesContent}>
          {title && <p>{title}</p>}
          <div className={classesMsg}>{message}</div>
        </div>
      </div>
      {close && (
        <span className={classesClose} onClick={(e) => handleClose(e)}>
          {closeText || '关闭'}
        </span>
      )}
    </div>
  )
}

export default Alert
