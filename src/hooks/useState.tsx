// useState初级实现
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hook = () => {
  cursor = 0
  const [num, setNum] = useState(0)
  const [hieght, setHeight] = useState(170)

  useEffect(() => {
    console.log('hahahah')
  }, [num])
  useEffect(() => {
    console.log(999)
  }, [num])

  const handelAdd = () => {
    setNum(num + 1)
  }
  const handelAddH = () => {
    setHeight(hieght + 1)
  }

  return (
    <>
      <p>数字{num}</p>
      <p>身高{hieght}</p>
      <button type="button" onClick={handelAdd}>
        点击+1
      </button>
      <button type="button" onClick={handelAddH}>
        身高+1
      </button>
    </>
  )
}
export default Hook

// Hook 编写
let allDeps: Array<any[] | undefined> = [] // 记录多个依赖性
let cursor: number = 0
function useEffect(callback: () => void, arr?: any[]) {
  let _cursor = cursor
  // 1.如果没有传入依赖项
  if (!arr) {
    callback()
    allDeps[_cursor] = arr
    cursor++
    return
  }
  const deps = allDeps[_cursor] // 当前useEffect上一次记录的依赖项

  // 2.如果传入依赖项
  let isChange = deps ? deps.some((item, index) => item != arr[index]) : true

  if (isChange) {
    callback()
    allDeps[_cursor] = arr
  }
  cursor++
}

// 模拟代码
export function render() {
  ReactDOM.render(<Hook />, document.getElementById('root'))
}
