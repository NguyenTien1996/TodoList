import React from 'react';
import {Col, Row, Card, Skeleton} from 'antd';
import MyContext from '../context/my-context';

class  Global extends React.Component {
    render(){
        return(
            <MyContext.Consumer>
                {context => {
                    console.log(context);
                    if(context.loading || context.virus.Global === undefined){
                        return(
                            <Skeleton active/>
                        )
                    }
                    return(
                        <Row>
                            <Col span={8}>
                                <Card title="mac benh">
                                    <p>So ca moi nhiem:{context.virus.Global.NewConfirmed}</p>
                                    <p>Tong so ca nhiem:{context.virus.Global.TotalConfirmed}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                    <Card title="tu vong">
                                    <p>so ca moi chet:{context.virus.Global.NewDeaths}</p>
                                    <p>Tong so ca chet:{context.virus.Global.TotalDeaths}</p>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="khoi benh">
                                    <p>So ca moi khoi:{context.virus.Global.NewRecovered}</p>
                                    <p>Tong so ca khoi:{context.virus.Global.TotalRecovered}</p>
                                </Card>
                            </Col>
                        </Row>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}
export default React.memo(Global)