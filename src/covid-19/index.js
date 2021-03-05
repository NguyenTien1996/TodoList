import React from 'react';
import LayoutPage from './component/layout';
import Global from './component/global';
import Country from './component/country';
import Myprovider from './context/my-provider';

class Corona extends React.Component{
    render() {
        return (
            <Myprovider>
                <LayoutPage>
                    <Global/>
                    <Country/>
                </LayoutPage>
            </Myprovider>
        );
    }
}
export default Corona;