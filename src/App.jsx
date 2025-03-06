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
    // console.dir(e.target.classList)
    setFormData(prevData => ({
      ...prevData,
      ["category"] : e.target.innerText,
      ["color"] : e.target.dataset.color
    }))
  }
  function onClickMore(e){
    e.currentTarget.parentNode.nextSibling.lastChild.classList.toggle("d-none")
    // e.target => 버블링 발생시 에러 생길수 있음. // e.currentTarget => 이벤트 발생대상 전체?
  }
  function onClickDel(todoId){
    // console.log(todoId)
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
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