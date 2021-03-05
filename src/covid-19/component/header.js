import React from 'react';
import {Layout} from 'antd';

const {Header} = Layout;

const HeaderPage = () => {
    return(
        <>
            <Header>
                <div className="my-header" style={{color:"#fff"}}>Thong tin virus corona</div>
            </Header>
        </>
    )
}
export default React.memo(HeaderPage)