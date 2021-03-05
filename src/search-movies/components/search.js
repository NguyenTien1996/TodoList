import React from 'react';
import {Row, Col, Input} from 'antd';

const { Search } = Input;

const SearchMovies = () => {
    return(
        <Row>
            <Col span={12} offset={6}>
                <Search 
                    placeholder="Search Movie ..." 
                    onSearch=""
                    enterButton 
                />
            </Col>
        </Row>
    )
}
export default React.memo(SearchMovies)