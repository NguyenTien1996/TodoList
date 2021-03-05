import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {useSelector} from 'react-redux';

const ResultComponent = (props) => {
    // const count = useSelector(state => state.counter.count);

    return(
        <h1>{props.count}</h1>
    )
}
const mapStateToProps = state => ({
    count: state.counter.count
})
ResultComponent.propTypes = {
    count:PropTypes.number.isRequired
}
export default connect(mapStateToProps, null)(React.memo(ResultComponent));