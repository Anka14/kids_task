import React, { useContext, useEffect } from "react";
import PropTypes, { func } from 'prop-types'
import Context from "../Context";

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 15px',
    border: '1px solid grey',
    borderRadius: "4px",
    marginBottom: '.5rem',
    fontSize: '30px',


  },
  input: {
    marginRight: '3rem',
    alignItems: 'center',

  },


}

function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context)

  const classes = []

  if (todo.completed) {
    classes.push('done')
  }


  return (
    <li style={styles.li}>
      <span className={classes.join(' ')} >
        <input type='checkbox' checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)} />
        <strong>{todo.title}</strong>
        {todo.img}
      </span>
      <button className="btn_delete" onClick={() => { removeTodo(todo.id) }}>&times;</button>

    </li>

  )
}

TodoItem.prototype = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}
export default TodoItem