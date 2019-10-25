import { Layout, Menu, Breadcrumb, Icon, Row, Col, Card, Popconfirm, Button} from 'antd';
import React from 'react'
import './App.css'
import logo2 from '../picture/LOGO-BW.png'
import imageClothes from '../picture/FW19-lookbook-2075x1500-15-686x948.jpg';
import DrawerInfo from './DrawerInfo';
import DrawerEdit from './DrawerEdit';
import DrawerCreate from './DrawerCreate';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;


class Manage extends React.Component {
    state = {
        collapsed: false,
        visible: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    toggle = () =>{
        console.log('toggle');
        
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">
                        <img src={logo2} alt="Logo" />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="home" />
                            <span><a href="/">Home</a></span>
                        </Menu.Item>

                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="edit" />
                                    <span>Manage</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Top</Menu.Item>
                            <Menu.Item key="10">Pants</Menu.Item>
                            <Menu.Item key="11">Skirt</Menu.Item>
                            <Menu.Item key="12">Jacket</Menu.Item>
                            <Menu.Item key="13">Dress</Menu.Item>
                            <Menu.Item key="14">Shoes</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="15">
                            <Icon type="logout" />
                            <span><a href="/">logout</a></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Manage</Breadcrumb.Item>
                        </Breadcrumb>
                        
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                    <Card
                                        style={{}}
                                        cover={
                                            <DrawerCreate/>
                                            
                                        }
                                        >
                                    </Card>
                                    
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Card
                                        style={{}}
                                        cover={
                                            <img
                                                className="img-box"
                                                alt="test"
                                                src={imageClothes}
                                            />
                                        }
                                        actions={[
                                            <DrawerInfo />,
                                            <DrawerEdit/>,
                                            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                                                <Icon type="delete" key="ellipsis" />
                                            </Popconfirm>
                                            ,
                                        ]}
                                        hoverable={true}
                                    >
                                        <Meta
                                            title="VATANIKA"
                                            description="CHECKED WOOL-BLEND AND CREPE OFF SHOULDER WIDE-LEG JUMPSUIT"
                                        />
                                    </Card>
                                    
                                </Col>
                            </Row>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default Manage;
