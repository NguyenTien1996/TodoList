import React, { useState } from 'react';
import AddTodo from './component/addTodo';
import ListTodo from './component/listTodo';
import FilterTodo from './component/filterTodo';
import Layout from './component/partial/layout';

const AppTodo = () => {
  let [nameTodo, setNameTodo] = useState('');
  let [idTodo, setIdTodo] = useState(1);
  let [listTodo, setListTodo] = useState([]);

  const changeInput = (event) => {
    let val = event.target.value;
    setNameTodo(val);
  }

  const addNameWork = (nameWork = '') => {
    if(nameWork.length > 0){
      setIdTodo(idTodo+1);
      setListTodo([...listTodo, {
        id: idTodo,
        name: nameWork,
        done: false,
        show: true
      }]);
      setNameTodo('');
    }
  }
  const deleteTodo = (idWork) =>{
    let newTodo = listTodo.filter(item => item.id !== idWork);
    setListTodo(newTodo);
  }
  const finishedTodo = (idWork) => {
      let newList = listTodo.map(item => {
          return item.id === idWork ? {...item, done: !item.done} : item;
      })
      setListTodo(newList)
  }
  const filterTodo = (type) => {
    switch(type){
      case 'all':
        const all = listTodo.map(item => {
          return {...item,show:true}
        });
        setListTodo(all)
        break;
      case 'finished':
        const finished = listTodo.map(item => {
          return !item.done ? {...item, show: false} : (item.done ? {...item, show: true} : item);
        });
        setListTodo(finished)
        break;
      case 'unfinished':
        const unfinished = listTodo.map(item => {
          return item.done ? {...item, show: false} : (!item.done ? {...item, show: true} : item);
        });
        setListTodo(unfinished)
        break;
      
    }
  }

  return (
    <>
        <Layout>
            <AddTodo
                type="text"
                typeButton="button"
                change={changeInput}
                add={addNameWork}
                value={nameTodo}
            > Add </AddTodo>
            <FilterTodo filter={filterTodo}/>
            <ListTodo todo={listTodo} delete={deleteTodo} finish={finishedTodo}/>
        </Layout>
    </>
  )
}
export default AppTodo;