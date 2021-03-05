import React from 'react';
import ContentInput from './component/content';

class AppRefs extends React.Component{
    constructor(){
        super();
        this.infoDom = React.createRef();
        this.infoInput = React.createRef();
    }
    showInfoDom = () => {
        console.log(this.infoDom.current);
    }
    getDataInput = () => {
        const data = this.infoInput.current.state.text;
        alert(data)
    }
    render(){
        return(
            <>
            <h1 ref={this.infoDom} id="title" className="title">This is content</h1>
            <ContentInput ref={this.infoInput}></ContentInput>

            <button onClick={this.showInfoDom}>Lay thong tin the H1</button>
            <button onClick={this.getDataInput}>Laay du lieu input</button>
            </>
        )
    }
}
export default AppRefs;