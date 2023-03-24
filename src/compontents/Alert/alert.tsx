// alert 出版组件
import React from 'react'
import classNames from 'classnames'

import errorImg from '../../styles/images/error.svg'

export enum AlertType {
  Success = 'success',
  Info = 'info',
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
  icon?: boolean
  children?: React.ReactNode
}

const Alert: React.FC<AlertProps> = (props) => {
  let { alertType, icon, children } = props
  let classes = classNames('alert', { [`alert-${alertType}`]: alertType, [`alert-icon-${alertType}`]: alertType && icon })
  return <p className={classes}>{children}</p>
}

Alert.defaultProps = {
  alertType: AlertType.Info
}

export default Alert
