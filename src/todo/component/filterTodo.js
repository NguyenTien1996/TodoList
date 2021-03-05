import React from 'react';
import { Button } from 'antd';

const FilterTodo = (props) =>{
    return(
        <Row>
            <Col span={24}>
            <Button
                type="dashed"
                size="small"
                onClick={() => props.filter('all')}
            >

            </Button>
            </Col>
        </Row>
    )
}
export default React.memo(FilterTodo)