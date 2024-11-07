import React from 'react'
class App extends React.Component{
  constructor(){
    super()
    // without calling the super(), you will not be able to call "this" keyword in derived class
    this.state = {name:"afsal",score:100}
  }

  render(){
    return (
      <h1>My name is {this.state.name} and my score would be {this.state.score}</h1>
    )
  }
}

const Practice = function(state){
  return(
    <h1>You're currently {state.isLoggedIn==true ? "Logged in" : "Logged out"}</h1>
  )
}

export default App
export {Practice}