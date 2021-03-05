import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;
const FooterPage = () => {
  return (
    <Footer>
      <p style={{textAlign: 'center'}}>Copyright © 2020 </p>
    </Footer>
  )
}
export default React.memo(FooterPage);