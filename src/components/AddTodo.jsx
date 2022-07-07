import { useState } from "react";

const AddTodo= ({onAddNewItem, onClearData}) => {

    const [todo, setTodo] = useState('')

    const handleAdd = () => {
        onAddNewItem(todo)
        setTodo('')
    }

    const handleClear = () => {
        onClearData()
    }

    const handleUserInput = event => {
        setTodo(event.target.value)
    }

    return(
        <div className=" mt-5">
            <div className="mb-3 col-4">
                <input value={todo} onChange={handleUserInput} type="text" className="form-control" id="todo-it" placeholder="Add your todos" />
            </div>
            <div className="mb-1">
                <button type="button" onClick={handleAdd} className="col-4 btn btn-primary">Add Item</button>
            </div>
            <div>
                <button type="button" onClick={handleClear} className="col-4 btn btn-danger">Clear All</button>
            </div>
        </div>
    )
}

export default AddTodo;