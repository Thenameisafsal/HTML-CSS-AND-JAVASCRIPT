import TodoItem from './todoitem'
import data from './todoData'

const mappedItems = data.map(function(obj){
  return <TodoItem task={obj.task} deadline={obj.deadline}/>
})

const App = function(){
  return (
    <form className="form">
      {mappedItems}
    </form>
  )
}

export default App