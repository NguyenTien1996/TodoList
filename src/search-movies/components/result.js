import React from 'react';
import {Row, Col,Card  } from 'antd';

const { Meta } = Card;

const Result = () => {
    return(
        <Row style={{padding:'10px'}}>
            <Col span={4}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        </Row>
    )
}
export default React.memo(Result)