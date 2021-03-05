import React,{useState,useEffect} from 'react';
import {Row, Col} from 'antd';
import Layoutcomponent from '../component/layout';
import {GetDataMovies} from '../services/api';

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await GetDataMovies(page);
            if(data){
                setMovies(data);
                setTotalItems(data)
            }
        }
        getData();
    },[page])
    return(
        <Layoutcomponent>
            <Row style={{margin:"20px 0"}}>
                <Col span={24}><h1>this is home page</h1>
                </Col>
            </Row>
        </Layoutcomponent>
    )
}
export default React.memo(HomePage)