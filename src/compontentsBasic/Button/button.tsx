import React from 'react'
import classNames from 'classnames'

//1.定义枚举,props中会用到的size，type
export enum ButtonType {
  Primary = 'primary',
  Defalut = 'defalut',
  Danger = 'danger',
  Link = 'link'
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
  Default = 'default'
}

// 2.创建props的接口类型
interface IBaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: React.ReactNode //相当于vue中的slot
  href?: string
}

//buuton 按钮组件
type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> //获取button原生属性
type AnchotButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement> //获取link原生属性
type IButtonProps = Partial<NativeButtonProps & AnchotButtonProps> //变成可选的

const Button: React.FC<IButtonProps> = (props) => {
  let { className, disabled = false, size, btnType = ButtonType.Defalut, children, href, ...restProps } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size || 'default',
    disabled: btnType === ButtonType.Link && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}

export default Button
