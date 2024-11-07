import React from 'react'
class Header extends React.Component{
  render(){
    return(
      <h1>Hi! {this.props.username}</h1>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Header username="afsal"/>
      </div>
    )
  }
}

export default App
