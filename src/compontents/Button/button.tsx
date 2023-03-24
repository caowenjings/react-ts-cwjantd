import React from 'react'
import classNames from 'classnames'

//1.定义枚举,props中会用到的size，type
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

// 2.创建props的接口类型
interface IButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: React.ReactNode //相当于vue中的slot
  href?: string
}

//buuton 按钮组件
const Button: React.FC<IButtonProps> = (props) => {
  let { className, disabled, size, btnType, children, href } = props

  const classes = classNames('btn', className, {
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
