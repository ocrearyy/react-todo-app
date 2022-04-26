import React from "react"

function TodoItem(props) {
  return (
    <li>
<input
  type="checkbox"
  checked={props.todo.completed}
  onChange={() => props.handleChangeProps(this.props.todo.id)}
  />    </li>

  )}

export default TodoItem