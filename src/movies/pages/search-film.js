import React from 'react';
import {Row, Col} from 'antd';
import LayoutComponent from '../component/layout';

const SearchFilmPage = () => {
    return(
        <LayoutComponent>
            <Row style={{margin:"20px 0"}}>
                <Col span={24}>
                    <h1>This is search</h1>
                </Col>
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(SearchFilmPage);