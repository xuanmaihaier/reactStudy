import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import Hooks from './compentent/hooks.jsx'
import App from './compentent/context.jsx'
import Routers from './compentent/routers/index.jsx'
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
  // state = {
  //   name: '',
  //   city: '',
  //   age: 0
  // }
  // add(){
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  // add = ()=>{
  //   this.setState({
  //         count: this.state.count+1,
  //       })
  // }
  // halder = (e) => {
  //   const target  = e.target;
  //   const value = target.type === 'checkbox'?target.checkout:target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   })
  // }
  // render() {
  //   return (
  //     // <div>
  //     //   <button onClick={this.add}>增加</button>{this.state.count}
  //     // </div>
  //     // 受控组件
  //     // <div><input value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}></input>{this.state.value}</div>
  //     // 多表单元素优化
  //     <div>
  //       <input name='name' onChange={this.halder} value={this.state.name}></input>
  //       <input name='city' onChange={this.halder} value={this.state.city}></input>
  //       <input name='age'  onChange={this.halder} value={this.state.age}></input>
  //     </div>
  //   )
  // }
  // 非受控组件
}
// ReactDom.render(<Hello />, document.getElementById('root'))

class Add extends React.Component {
  constructor() {
    super()
    this.state = {
      count : 1,
      list : [
        {
          name:'崔耀',
          age:23,
          key:1
        }, {
          name:'刘发狮爱吃释',
          age:23,
          key:2
        }, {
          name:'谈琰',
          age:23,
          key:3
        }
      ]
    }
  }
  hanlder = () => {
    this.setState({
      count : ++this.state.count
    })
  }
  listHanlder = (index) => {
    const list =  [...this.state.list]
    this.setState({
      list: list.filter((item,ind)=>ind===index? ++item.age : item)
      // bug 【{...list,...list[index]}】
      // list : [...list,{...list[index],age:++list[index].age}]
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.hanlder}>增加</button>
        <p>{this.state.count}</p>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
              <li key={item.key}>{item.name}
              <p>{item.age}</p>
              <button onClick={()=>this.listHanlder(index)}>增加</button>
              </li>
              )
            })
          }
      </ul>
      </div>
    )
  }
}
ReactDom.render(<Add/>,document.getElementById('root'))
// 组件传值
class PropTest extends React.Component{
  static propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    sex:PropTypes.string,
  }
  static defaultProps = {
    sex:'男',//sex默认值为男
    age:18, //age默认值为18
    name:'cc'
  }
  render(){
    const {name,age,sex} = this.props
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{sex}</p>
      </div>
    )
  }
}
const p = {name:'崔耀',age:21,sex:'男'}
ReactDom.render(<PropTest {...p}/>,document.getElementById('root'))

// ref
class RefTest extends React.Component{
  createRef1 = React.createRef()
show = ()=>{
 console.log(this.createRef1.current.value);
}
 render() {
   return(
     <div>
      <input ref={this.createRef1} type="text" placeholder='组件传值' />
      <button onClick={this.show}>click</button>
     </div>
   )
 }
}
ReactDom.render(<RefTest/>,document.getElementById('root'))

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
ReactDom.render(<Counter/>,document.getElementById('root'))
ReactDom.render(<Hooks/>, document.getElementById('root'))
ReactDom.render(<App/>, document.getElementById('root'))
ReactDom.render(<Routers/>, document.getElementById('root'))