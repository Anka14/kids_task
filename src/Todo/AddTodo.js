import React, { useState } from "react";
import PropTypes from 'prop-types'


function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value


  }

}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      // setValue('')
      input.clear()
    }
  }

  return (
    <form styles={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input className="input_value" {...input.bind} />
      <button className="submit" type='submit'>Add Tasks</button>
    </form>
  )
}
AddTodo.prototypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo