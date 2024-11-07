const TodoItem = function(props) {
    return(
        <div className="todoitem">
            <label>Task: {props.task}</label>
            <input type="checkbox"></input>
            <h1>Deadline: {props.deadline}</h1>
        </div>
    )
}

export default TodoItem