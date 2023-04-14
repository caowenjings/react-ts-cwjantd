// menuItem 组件
import React, { CSSProperties, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext, key } from './index'

interface menuItemProps {
  disable?: boolean
  index: number | string
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}

const Menu: React.FC<menuItemProps> = (props) => {
  const { className, style, disable, children, index } = props
  const pContext = useContext(MenuContext)

  //样式
  const classbox = classNames('menu-item', className, {
    'is-disable': disable
  })
  //点击事件
  const handelClick = (index: key) => {
    if (pContext.onSelect && !disable) {
      pContext.onSelect(index)
    }
  }

  return (
    <li className={classbox} style={style} onClick={() => handelClick(pContext.index)}>
      {children}
    </li>
  )
}

export default Menu
