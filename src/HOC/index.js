import React from 'react';
import HOC from './hoc';
import Student from './component/student';

const dataStudents = [
    {id:1, name: 'Tien', phone:'06546543541', age: 16, email: 'tienn@gmail.com'},
    {id:2, name: 'Tien', phone:'06546543541', age: 16, email: 'tienn@gmail.com'},
]
const NewStudent = HOC(Student, dataStudents);
class AppHoc extends React.Component{
    render(){
        return(
            <NewStudent/>
        )
    }
}
export default AppHoc;