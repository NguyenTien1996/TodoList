import React from 'react';
import HeaderPage from './component/header';

class LifecyleComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    clickButton = () => {
        this.setState({count:this.state.count + 1})
    }
    render() {
        return (
            <div>
                <HeaderPage  count={this.state.count}/>
                <p>{this.state.count}</p>
                <button onClick={this.clickButton}>Click</button>
            </div>
        );
    }
}
export default React.memo(LifecyleComponent)