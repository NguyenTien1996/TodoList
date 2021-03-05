import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterPage = () => {
    return(
        <>
            <Footer><p>Copy-right</p></Footer>
        </>
    )
}
export default React.memo(FooterPage)