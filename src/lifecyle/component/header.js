import React from 'react';
import {Layout} from 'antd';

const Header = Layout;
class HeaderPage extends React.Component{
    render() {
        return (
            <Layout>
                <Header>
                    <p>This is header - {this.props.count}</p>
                </Header>
            </Layout>
        );
    }
}
export default React.memo(HeaderPage)