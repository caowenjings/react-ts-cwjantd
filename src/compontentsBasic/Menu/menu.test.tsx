// menu 单元测试 代码升级时保证之前的功能是不会变的
/**
 * 1.写测试用例
 * 2.写默认值
 * 3.写使用组件
 * 4.beforeEach中写通用函数，获取元素
 */
import React from 'react'
import { render, RenderResult, fireEvent, wait } from '@testing-library/react'
import Menu, { MenuProps } from './index'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
jest.mock('../Icon/icon', () => {
  return () => {
    return <i className="fa" />
  }
})
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: (props: any) => {
      return props.children
    }
  }
})
// 水平默认数据
const testProps: MenuProps = {
  defalutIndex: '0',
  onSelect: jest.fn(), //监控
  className: 'test'
}
// 垂直默认数据
const testVerProps: MenuProps = {
  defalutIndex: '0',
  mode: 'vertical'
  // defaultOpenSubMenus: ['4']
}
// 组件使用
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>opened1</MenuItem>
      </SubMenu>
    </Menu>
  )
}
const createStyleFile = () => {
  const cssFile: string = `
    .viking-submenu {
      display: none;
    }
    .viking-submenu.menu-opened {
      display:block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
let wrapper: RenderResult, wrapper2: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

// 设置成一组
describe('test Menu and MenuItem component in default(horizontal) mode', () => {
  // beforeEach 通用函数存通用变量，运行之前会跑
  beforeEach(() => {
    //获取元素
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  // 提供默认值会不会显示正常
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  // 点击以后会不会样式显示，回调函数会不会执行，diaable点击不会变化
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible()
    })
  })
})
//传入 vertical 的显示
describe('test Menu and MenuItem component in vertical mode', () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerProps))
    wrapper2.container.append(createStyleFile())
  })
  //垂直模式 的显示
  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper2.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it('should show dropdown items when click on subMenu for vertical mode', () => {
    const dropDownItem = wrapper2.queryByText('drop1')
    expect(dropDownItem).not.toBeVisible()
    fireEvent.click(wrapper2.getByText('dropdown'))
    expect(dropDownItem).toBeVisible()
  })
  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    expect(wrapper2.queryByText('opened1')).toBeVisible()
  })
})
