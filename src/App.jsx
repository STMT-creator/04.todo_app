import React, { useState } from 'react'
import TodoHeader from './components/TodoHeader.jsx'
import TodoInput from './components/TodoInput.jsx'
import TodoLists from './components/TodoLists.jsx'
import "./App.css"


function App() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    id: id,
    title: '',
    desc: '',
    start: new Date().toISOString().split("T")[0],
    end: '',
    category: 'etc',
    participant: 0,
    color: 'skyblue',
  })
  function onSubmit(e) {
    e.preventDefault();
    setTodos(prevTodo => ([
      ...prevTodo, {
        ...formData,
        id: id
      }
    ]))
    setId(prevId => prevId + 1);
    setFormData({
      id: id,
      title: '',
      desc: '',
      start: new Date().toISOString().split("T")[0],
      end: '',
      category: 'etc',
      participant: 0,
      color: 'skyblue',
    })
  }
  function onChange(e) {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }
  function onClick(e){
    // console.dir(e.target)
    console.dir(e.target.classList)
    if(e.target.classList.length < 4) {
      e.target.classList.add("btn-active")
    }
    setFormData(prevData => ({
      ...prevData,
      ["category"] : e.target.innerText,
      ["color"] : e.target.dataset.color
    }))
  }
  function onClickMore(e){
    document.querySelector(".btn-group").classList.toggle("d-none");
    // console.dir(e.target.previousElementSibling)
  }
  function onClickDel(e, todoId){
    setTodos(prevTodo => [prevTodo.id !== todoId])
  }
  return (
    <>
      <TodoHeader />
      <TodoInput
        formData={formData}
        todos={todos}
        onClick={onClick}
        onChange={onChange}
        onSubmit={onSubmit} />
      <TodoLists todos={todos} onClickMore={onClickMore} onClickDel={onClickDel} />
    </>
  )
}

export default App