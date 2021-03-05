import React from 'react';
import {Row, Col, Button} from 'antd';

const FilterTodo = (props) => {
    return(
        <Row style={{marginTop: '10px', marginBottom: '10px'}}>
            <Col span={24}>
                <Button
                    type="dashed"
                    size="small"
                    onClick={() => props.filter('all')}
                >All
                </Button>
                <Button
                    type="dashed"
                    size="small"
                    onClick={() => props.filter('finished')}
                >finished
                </Button>
                <Button
                    type="dashed"
                    size="small"
                    onClick={() => props.filter('unfinished')}
                >unfinished
                </Button>
            </Col>
        </Row>
    )    
}
export default React.memo(FilterTodo);