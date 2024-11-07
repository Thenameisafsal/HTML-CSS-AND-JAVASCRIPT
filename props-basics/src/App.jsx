const App = function(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.contactNo}</h2>
      <h3>{props.about}</h3>
      <h4>This is h4 text anyway,{props.end}</h4>
    </div>
  )
}

export default App
