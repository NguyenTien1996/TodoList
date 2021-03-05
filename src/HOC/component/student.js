import React from 'react';
import TableData from './table';
class Student extends React.Component{
    render(){
        return(
            <TableData data={this.props.data}/>
        )
    }
}
export default Student;