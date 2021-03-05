import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

const FooterPage = () => {
    return(
        <>
            <Footer>
                <p className="my-header">CopyRight ANT-design</p>
            </Footer>
        </>
    )
}
export default React.memo(FooterPage)