import React from 'react';
import PropTypes from 'prop-types';
import { List,  Row, Col, Checkbox, Typography} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const {Text}  = Typography;
const ListTodo = (props) => {
  return (
    <>
      <Row style={{margin:"20px 0"}}>
                <Col span={24}>
                    <List
                        itemLayout="horizontal"
                        dataSource={props.todo}
                        renderItem={item => (
                          <>
                            {item.show && (
                              <List.Item>
                                <List.Item.Meta
                                avatar={<Checkbox onChange={() => props.finish(item.id)} checked={item.done}></Checkbox>}
                                title={item.done ? (<Text delete>{item.name}</Text>) : (<Text >{item.name}</Text>)}
                                />
                                <div><DeleteOutlined onClick={() => props.delete(item.id)}/></div>
                            </List.Item>
                            )}
                          </>
                        )}
                    />
                </Col>
            </Row>
    </>
  )
}
ListTodo.propTypes = {
  todo: PropTypes.array
}
export default React.memo(ListTodo);