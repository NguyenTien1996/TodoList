import React,{useState , useEffect} from 'react';
import {Row, Col, Card, Skeleton } from 'antd';
import {api} from '../service/api'
;const {Meta} = Card;

const Users = () => {
    const [loading, setLoading] = useState(false);
    const [users, setListUser] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            await setLoading(true)
            const ListUser = await api.GetDataUser(page);
            if(ListUser){
                await setListUser(ListUser.data);
                await setLoading(false);
            }
        }
        getData();
    },[])
    if(loading || users.length === 0){
        return (<Skeleton active/>);
    }

    return(
        <Row style={{margin:"20px 0"}}>
        {users.map((item, index) => (
            <Col span={8} key={index}>
            <Card  
            style={{width:240}}
            hoverable 
            cover={
                <img  src={item.avatar} />
            }>
                <p>Email: {item.email}</p>
                <p>First Name: {item.first_name}</p>
                <p>Last Name: {item.last_name}</p>
            </Card>
        </Col>
        ))}
        </Row>
    )
}
export default React.memo(Users)