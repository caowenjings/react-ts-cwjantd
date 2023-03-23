import React from 'react'
import classNames from 'classnames'

export enum ButtonType {
  Primary = 'primary',
  Defalut = 'defalut',
  Dashed = 'dashed',
  Link = 'link',
  Text = 'text'
}

export enum ButtonSize {
  Large = 'large',
  Small = 'small',
  Default = 'default'
}

interface IButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: React.ReactNode
  href?: string
}

//buuton 按钮组件
const Button: React.FC<IButtonProps> = (props) => {
  let { className, disabled, size, btnType, children, href } = props

  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size || 'default',
    disabled: btnType == ButtonType.Link && disabled
  })
  if (btnType == ButtonType.Link && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Defalut
}

export default Button
