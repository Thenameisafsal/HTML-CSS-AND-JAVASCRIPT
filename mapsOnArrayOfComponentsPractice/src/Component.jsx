const Component  = function(props){
  return(
    <div>
      <h1>Candidate name: {props.name}</h1>
      <h1>Candidate score: {props.score}</h1>
    </div>
  )
}

export default Component