import React from 'react';
import {Layout } from 'antd';
const {Footer} = Layout;

const FooterPage = () => {
    return(
        <Footer>
            <p style={{textAlign:'center'}}>Copy Right - Nguyen Tien</p>
        </Footer>
    )
}
export default React.memo(FooterPage)