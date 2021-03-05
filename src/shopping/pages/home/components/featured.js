import React from 'react';
import {Row,Col, Card} from 'antd';

const {Meta} = Card;

const FeaturedPage = () => {
    return(
        <Row style={{margin:'10px'}}>
            <h2 style={{textAlign:'center'}}>Feature Product</h2>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat"  />
                </Card>
            </Col>
        </Row>
    )
}
export default React.memo(FeaturedPage)