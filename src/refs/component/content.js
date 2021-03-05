import React from 'react';

class Content extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }
    onChange = (e) => {
        const val = e.target.value;
        this.setState({...this.state,text: val})
    }
    render(){
        return(
            <input type="text" onChange={this.onChange}/>
        )
    }
}
export default Content;