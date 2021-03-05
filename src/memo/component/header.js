import React from 'react';
import PropTypes from 'prop-types';

const HeaderPage = (props) => {
    console.log('Header dc render');
    
    return(
        <header>
            <h1>this is header - {props.counter}</h1>
        </header>
    )
}
HeaderPage.propTypes = {
    counter: PropTypes.number
}
export default React.memo(HeaderPage);