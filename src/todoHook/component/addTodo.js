import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Input} from 'antd';

const { Search } = Input;
const AddTodo = (props) => {
  return (
    <>
        <Row>
            <Col span={24}>
                <Search 
                placeholder="todo name..." 
                enterButton="Add"
                size="large"
                onSearch={value => props.add(value)} 
                onChange={props.change}
                value={props.value}
                />
            </Col>
        </Row>
      {/* <input
        value={props.value}
        type={props.type}
        onChange={props.change} />
      <button
        type={props.typeButton}
        onClick={() => props.add(props.value)}
        >{props.children}</button> */}
    </>
  )
}
AddTodo.propTypes = {
  change: PropTypes.func.isRequired,
  value: PropTypes.string,
  add: PropTypes.func.isRequired,
}
export default React.memo(AddTodo);