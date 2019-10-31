import { Layout, Menu, Breadcrumb, Icon, Row, Col, Card, Popconfirm, Button } from 'antd';
import React from 'react'
import logo2 from '../picture/LOGO4.png'
import imageClothes from '../picture/FW19-lookbook-2075x1500-15-686x948.jpg';
import DrawerInfo from './DrawerInfo';
import DrawerEdit from './DrawerEdit';
import DrawerCreate from './DrawerCreate';
import '../Style/Main.css'
import '../Style/App.css'
import RestService from '../service/rest.service'

const { Content, Sider, Header } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
const rest = new RestService

class Manage extends React.Component {
    state = {
        collapsed: false,
        visible: false,
        formData: null
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

    toggle = () => {
        console.log('toggle');

    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        let getAllEvent = await rest.getAllEvent()
        let getAllPlace = await rest.getAllPlace()
        let womenShape = await rest.womenShape()
        let menShape = await rest.menShape()
        const formData = {
            events: getAllEvent.data,
            places: getAllPlace.data,
            women: womenShape.data,
            men: menShape.data
        }
        this.setState({
            formData
        })
        console.log(this.state.formData);

    }

    render() {
        // console.log(this.state.events);

        return (
            <Layout style={{ display: 'flex', flexDirection: "row" }}>
                <div style={{ width: "256px" }}>
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        style={{ width: 256, minHeight: '100vh' }}
                    >
                        <div className="logo">
                            <img src={logo2} className="Logo" />
                        </div>

                        {this.state.formData !== null ? (<DrawerCreate formData={this.state.formData} />) : (<div></div>)}
                        <Menu.Item key="1">Top</Menu.Item>
                        <Menu.Item key="2">Pants</Menu.Item>
                        <Menu.Item key="3">Skirt</Menu.Item>
                        <Menu.Item key="4">Jacket</Menu.Item>
                        <Menu.Item key="5">Dress</Menu.Item>
                        <Menu.Item key="6">Shoes</Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="logout" />Logout
                        </Menu.Item>
                    </Menu>
                </div>
                <Layout>
                    <Content>
                        <Header style={{ background: '#fff', padding: 0 }} >
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Top</Breadcrumb.Item>
                            </Breadcrumb>
                        </Header>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={5}>
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
                                            <DrawerEdit />,
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
