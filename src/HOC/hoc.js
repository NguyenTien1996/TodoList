import React from 'react';

const HocsComponent = (MyComponent, data) => {
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                data : data
            }
        }
        render(){
            return(
                <MyComponent {...this.props} data={this.state.data}/>
            )
        }
    }
}
export default HocsComponent;