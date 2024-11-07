import Component from './Component'
function App() {
  // this is the array of components
  let arr = [<Component/>,<Component/>,<Component/>]
  let comps = arr.map(function(){
    return <Component name="Afsal" technology="golang and react" organization="abovecloud9"/>
  })
  return (
    <>
      <Component name="Afsal" technology="golang and react" organization="abovecloud9"/>
      {/* render the array of components */}
      {comps}
    </>
  )
}

export default App
