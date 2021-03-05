import React from 'react';
import {Layout, Row, Col} from 'antd';
import HeaderPage from './header';
import FooterPage from './footer';
import Proptypes from 'prop-types';

const {Content} = Layout;

const Layoutcomponent = (props) => {
    return(
        <Layout>
            <HeaderPage/>
            <Content>
                <Row >
                    <Col span={12} offset={6}>{props.children}</Col>
                </Row>
            </Content>
            <FooterPage/>
        </Layout>
    )
}

Layoutcomponent.propTypes = {
    children : Proptypes.node
}
export default React.memo(Layoutcomponent);