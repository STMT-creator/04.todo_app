import React from "react"
import "./TodoInput.css"


function TodoInput({ onChange, onSubmit, formData, onClick }) {
    const categories = [
        { name: "free time", color: "orange", id: 1 },
        { name: "travel", color: "pink", id: 2 },
        { name: "meeting", color: "yellowgreen", id: 3 },
        { name: "design", color: "chocolate", id: 4 },
        { name: "etc", color: "skyblue", id: 5 }
    ]
    return (
        <>
            <form className="mx-auto" onSubmit={onSubmit}>
                <fieldset>
                    <legend>Todo App</legend>
                    <div className="title-area d-flex container gap-1 flex-column">
                        <div className="btns d-flex justify-between">
                            {
                                categories.map(category => {
                                    return <button key={category.id}
                                        type="button" onClick={(e) => onClick(e)}
                                        className={`btn text-primary btn-active`} // ${category.id - 1 ==  ? "btn-active" : ""}
                                        data-color={category.color}>
                                        {category.name}
                                    </button>
                                })
                            }
                        </div>
                        <input type="text" className="text-overflow" name="title" id="title" placeholder='Todo Title' onChange={onChange} value={formData.title} />
                        <textarea name="desc" className="text-overflow" id="desc" cols="20" rows="10" placeholder='add a description' value={formData.desc} onChange={onChange}></textarea>
                        <div className="d-flex justify-content-between items-center">
                            <label htmlFor="start">시작일</label>
                            <input type="date" name='start' id='start' value={formData.start} className="m-0" onChange={onChange} />
                            <label htmlFor="end">종료일</label>
                            <input type="date" name='end' id='end' value={formData.end} className="m-0" onChange={onChange} />
                        </div>
                        <div className="participant">
                            <label>인원수</label>
                            <input type="number" name="participant" id="participant" value={formData.participants} min="0" max="10" onChange={onChange} />
                        </div>
                    </div>
                    <div className="text-end"><button type='submit'>추가</button></div>
                </fieldset>
            </form>
        </>
    )
}
export default TodoInput