// menuItem 组件
import React, { CSSProperties, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext, key } from './index'

interface menuItemProps {
  disabled?: boolean
  index?: number | string
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}

const MenuItem: React.FC<menuItemProps> = (props) => {
  const { className, style, disabled, children, index } = props
  const pContext = useContext(MenuContext)

  //样式
  const classbox = classNames('menu-item', className, {
    'is-disable': disabled,
    'is-menu-active': index == pContext.activeIndex
  })

  //点击事件
  const handelClick = (index: key) => {
    if (pContext.onSelect && !disabled) {
      pContext.onSelect(index)
    }
  }

  return (
    // eslint-disable-next-line
    <li className={classbox} style={style} onClick={() => handelClick(pContext.activeIndex)}>
      {children}
    </li>
  )
}

export default MenuItem
