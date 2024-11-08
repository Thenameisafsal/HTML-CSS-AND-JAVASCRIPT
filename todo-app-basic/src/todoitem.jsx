const TodoItem = function(props) {
    return(
        <div className="todoitem">
            <label>Task: {props.task}</label>
            <input type="checkbox" onChange={() => {console.log("the checkbox value has been changed")}}></input>
            <h1>Deadline: {props.deadline}</h1>
        </div>
    )
}

export default TodoItem