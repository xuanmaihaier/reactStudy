import React from 'react'
import ReactDom from 'react-dom'

// 创建react元素
const title = React.createElement('h1', null, '你好react')

// 渲染元素
ReactDom.render(title, document.getElementById('root'))

// jsx
// const name = '崔耀'
// let isLoading = true
// const songs = [
//   { id: 1, name: '哈哈' },
//   { id: 2, name: '牛啊' },
//   { id: 3, name: '列表' },
// ]
// const list = (
//   <ul>
//     {songs.map(item=><li >{item.id}{item.name}</li>)}
//   </ul>
// )
// const loadData = ()=>{
//   if(isLoading){
//     return <div>
//       数据正在加载中...
//     </div>
//   }
//   return <div>数据加载完毕,牛啊牛啊</div>
// }
// const jsx = (
//   <h1>
//     我是用jsx创建的react元素，我是{name}
//     {loadData()}
//     {list}
//   </h1>
// )
// ReactDom.render(jsx,document.getElementById('root'))
// const tt = (
//   <table>
//     <tbody>
//       <tr>
//         {songs.map(item => <td key={item.id} style={item.id===1?{color:'red'}:{color:'black'}}>{item.name}</td>)}
//       </tr>
//     </tbody>
//   </table>
// )

// const Hello = () => <div>我是一个react组件</div>
// ReactDom.render(<Hello />, document.getElementById('root'))
class Hello extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     count:0
  //   }
  // }
  // 简化写法
  state = {
    count: 0
  }
  // add(){
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  add = ()=>{
    this.setState({
          count: this.state.count+1
        })
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>增加</button>{this.state.count}
      </div>
    )
  }
}
ReactDom.render(<Hello />, document.getElementById('root'))