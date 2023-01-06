
import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

function TodoList(props) {
  const styles = {
    ul: {
      listStyle: 'none',
      color: 'yellow',

    },
    index: {
      padding: "10px"
    }
  }

  return (
    <ul style={styles.ul}>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />
      })}
    </ul >
  )

}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList