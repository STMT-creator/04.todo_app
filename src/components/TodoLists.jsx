import "bootstrap-icons/font/bootstrap-icons.css"
import React from 'react'
import "./TodoLists.css"

function TodoLists({todos, onClickMore, onClickDel }) {
    function passDday(todo){
        return Math.round((new Date(todo.end).getTime() - new Date(todo.start).getTime()) / (1000*60*60*24));
    }
    return (
        <>
            <ul className='items'>
                {
                    todos.map(todo => <li key={todo.id} className='item'>
                        <div className="todo-title d-flex justify-between">
                            <h2 className={`category ${todo.color}`}>{todo.category}</h2>
                            <button className="more-btn" onClick={onClickMore}><i class="bi bi-three-dots-vertical"></i></button>
                        </div>
                        <div className={`main bl-${todo.color} posi-relative`}>
                            <h2 className='text-overflow'>{todo.title}</h2>
                            <p className='text-overflow'>{todo.desc}</p>
                            <div className="btn-group posi-relative d-none">
                                <button type="button" className="del-btn posi-absolute" onClick={onClickDel}><i className="bi bi-trash"></i></button>
                            </div>
                        </div>
                        <div className="extra d-flex gap-1">
                            <span>일정 : {todo.end}까지 D-{passDday(todo)}</span>
                            <span><i className="bi bi-people"></i>{todo.participant}</span>
                        </div>
                    </li>)
                }
            </ul>
        </>
    )
}

export default TodoLists