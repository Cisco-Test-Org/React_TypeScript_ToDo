import '../model/Todo'
import Todo from '../model/Todo';

const TodoList: React.FC<{list: Todo[]}> = ({list}) => {
    return(
        <div className="mt-5 col-4">
            <ul className="list-group">
                {list.length === 0 && <p>No todos found!</p>}
                {list.map(listItem => (
                    <li key={listItem.id} className="list-group-item">{listItem.todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;