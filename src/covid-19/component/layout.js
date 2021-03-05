import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import {Layout} from 'antd';
const {Content} = Layout;

const LayoutPage = (props) => {
    return(
        <Layout>
            <Header/>
            <Content>
                {props.children}
            </Content>
            <Footer/>
        </Layout>
    )
}
LayoutPage.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(LayoutPage);