class Todo {
    id: string
    todo: string

    constructor(todoItem: string){
        this.id = Math.random().toString()
        this.todo = todoItem
    }
}

export default Todo;