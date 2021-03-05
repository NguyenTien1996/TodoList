import React from 'react';
import {Row, Col , Layout} from 'antd';
import HeaderPage from './partial/header';
import FooterPage from './partial/footer';

const {Content} = Layout;

class LayoutPage extends React.PureComponent{
    render(){
        return(
            <>
                <HeaderPage/>
                <Content>
                    <Row style={{padding:"20px 0"}}>
                        <Col span="12" offset={6}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Content>
                <FooterPage/>
            </>
        )
    }
}
export default LayoutPage;