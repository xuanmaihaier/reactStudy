import React, { Fragment, useState, useEffect, useRef, createRef } from 'react'

export default function Hooks() {
  const [count, setCount] = useState(0)
  const uRef = useRef()
  const cRef = createRef()
  useEffect(() => {
    // 外层写组件mounted和updata
    document.title = `react,${count}`
    return () => {
      // return 写react组件destroy的方法
      // console.log(1)
    }
  })
  const btnClk = () => {
    setCount((count) => (count = count + 1))
  }
  useEffect(() => {
    uRef.current.value = count
    cRef.current.value = count
  }, [count])
  // useref与createref 区别在于 useref:每次都是拿上次的ref createref:每次拿的都是新的
  console.log(
    uRef.current?.value,
    cRef.current?.value,
    'state的改变引起的组件重渲染'
  )
  return (
    <Fragment>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>累加器</button>
      <input type="text" ref={cRef} />
      <input type="text" ref={uRef} />
      <button onClick={btnClk}>button</button>
    </Fragment>
  )
}
