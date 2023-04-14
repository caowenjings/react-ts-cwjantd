// Menu组件分为横向、纵向，横向/纵向分为有下拉菜单栏的、没有下拉菜单栏的
import React, { CSSProperties, createContext, useState, useMemo } from 'react'
import classNames from 'classnames'

type menuMode = 'horizontal' | 'vertical'
type selectCallback = (selectIndex: string | number) => void
export type key = number | string

// 组件接口
interface menuProps {
  defalutIndex?: key
  className?: string
  mode?: menuMode
  style?: CSSProperties
  onSelect?: selectCallback
  children: React.ReactNode
}
// 要传入子组件的数据接口
interface IMenuContext {
  index: key
  onSelect?: selectCallback
}

// 利用context 来进行父子穿参数，自定义回调
export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<menuProps> = (props) => {
  const { defalutIndex = 0, className, mode = 'horizontal', style, onSelect, children } = props
  const [activeIndex, setActiveIndex] = useState(defalutIndex)
  // 样式
  const classbox = classNames('menu', className, {
    'menu-horizontal': mode === 'horizontal',
    'menu-vertical': mode === 'vertical'
  })
  // 点击事件
  const handelClick = (index: key) => {
    setActiveIndex(index)
    onSelect && onSelect(activeIndex)
  }
  // 传入的参数
  const pContent = {
    index: activeIndex,
    onSelect: handelClick
  }

  return (
    <ul className={classbox} style={style}>
      <MenuContext.Provider value={pContent}>{children}</MenuContext.Provider>
    </ul>
  )
}

export default Menu
