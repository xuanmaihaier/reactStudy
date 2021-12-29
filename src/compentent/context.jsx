import React from 'react'
// 创建一个全局context
const ThemeContext = React.createContext('light')
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  )
}

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {(value) => <button>{value}</button>}
    </ThemeContext.Consumer>
  )
}

export default App
