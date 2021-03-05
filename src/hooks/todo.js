import React, {useState} from 'react';
import AddTodo from './component/add-todo';
import ListTodo from './component/list-todo';

const Todo = () => {
    let [nameTodo, setNameTodo] = useState('');
    let [idTodo, setIdTodo] = useState(1);
    let [listTodo, setListTodo] = useState([])

    const changeInput = (event) => {
        let val = event.target.value;
        setNameTodo(val)
    }
    const addNameWork = (nameWork = '') => {
        if(nameWork.length > 0){
            setIdTodo(idTodo + 1);
            setListTodo([
                ...listTodo,{
                    id:idTodo,
                    name:nameWork,
                    done:false
                }
            ]);
            setNameTodo('');
        }
    }
    return(
        <>
            <AddTodo
                type="text"
                typeButton="button"
                change={changeInput}
                add={addNameWork}
                value={nameTodo}
            >
            Add
            </AddTodo>
            <ListTodo todo={listTodo}/>
        </>
    )
}
export default Todo;