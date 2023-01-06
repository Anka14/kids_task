
import './App.css';
import TodoList from './Todo/TodoList';
import brushTeeth from './assets/img/brushTeeth.png'
import tennis from './assets/img/tennis.png'
import handWashing from './assets/img/handWashing.png'
import makeBed from './assets/img/makeBed.png'
import cleanToys from './assets/img/cleanToys.png'
import shower from './assets/img/shower.png'
import hugs from './assets/img/hugs.png'
import { useState, useEffect } from 'react';
import Context from './Context';
import AddTodo from './Todo/AddTodo';
import moon from './assets/img/moon.png'


function App() {



  let [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'brush teeth', img: <img className='icon' src={brushTeeth} alt='logo' /> },
    { id: 2, completed: false, title: 'wash the hands, face', img: <img className='icon' src={handWashing} alt='logo' /> },
    { id: 3, completed: false, title: 'make the bed', img: <img className='icon' src={makeBed} alt='logo' /> },
    { id: 4, completed: false, title: 'clean up toys', img: <img className='icon' src={cleanToys} alt='logo' /> },
    { id: 5, completed: false, title: 'play tennis', img: <img className='icon' src={tennis} alt='logo' /> },
    { id: 6, completed: false, title: 'take a shower', img: <img className='icon' src={shower} alt='logo' /> },
    { id: 7, completed: false, title: 'give kiss and hugs', img: <img className='icon' src={hugs} alt='logo' /> },

  ])



  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))

  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))

  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="app">
        <h1 className='title'>THE DAY'S DONE TASKS before sleeping TIME <span><img src={moon} alt='pic' /></span></h1>

        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <h1>No tasks, you won</h1>}

      </div>
    </Context.Provider>

  );
}

export default App;
