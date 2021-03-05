import React from 'react';
import Layoutcomponent from './users/layout';
import Content from './users/content';

const AppUser = () => {
    return(
        <>
        <Layoutcomponent>
            <Content/>
        </Layoutcomponent>
        </>
    )
}

export default AppUser;