import React from 'react';
import {Row, Col} from 'antd';
import LayoutComponent from '../component/layout';

const NewFilmPage = () => {
    return(
        <LayoutComponent>
            <Row style={{margin:"20px 0"}}>
                <Col span={24}>
                    <h1>This is new film</h1>
                </Col>
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(NewFilmPage);