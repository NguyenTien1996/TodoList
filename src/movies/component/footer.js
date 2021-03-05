import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent = () => {
    return(
        <Footer>
            <p>Movie @2020 Copyright-2020</p>
        </Footer>
    )
}
export default React.memo(FooterComponent)