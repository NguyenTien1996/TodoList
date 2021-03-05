import React from 'react';
import LayoutPage from './component/layout';
import AddTodo from './component/addTodo';
import ListTodo from './component/listTodo';

class AppTodo extends React.Component{
    constructor(){
        super();
        this.state = {
            nameWork: '',
            idTodo: 1,
            listTodo: []
        }
    }
    getNameWork = (event) => {
        const name = event.target.value;
        if(name.length > 0){
            this.setState({...this.state,nameWork : name})
        }
    }
    addToto = (name) => {
        if(name.length > 0){
            this.setState({
                ...this.state, 
                idTodo: this.state.idTodo + 1, 
                nameWork:'',
                listTodo:[...this.state.listTodo, {
                    id:this.state.idTodo,
                    name: name,
                    done: false
                }]
            })
        }
    }

    deleteTodo = (idWork) => {
        const newTodo = this.state.listTodo.filter(item => item.id !== idWork);
        this.setState({
            ...this.state,
            listTodo: newTodo
        })
    }
    finishedTodo = (idWork) => {
        const NewsList = this.state.listTodo.map(item => {
            return item.id === idWork ? {
                ...item,
                done: !item.done
            } : item;
        })
        this.setState({
            ...this.state,
            listTodo: NewsList,
        })
    }
    render(){
        return(
            <LayoutPage>
                <AddTodo 
                    change = {this.getNameWork}
                    add={this.addToto}
                    value={this.state.nameWork}
                />
                <ListTodo
                    todo={this.state.listTodo}
                    delete={this.deleteTodo}
                    finish = {this.finishedTodo}
                />
            </LayoutPage>
        )
    }
}
export default AppTodo;