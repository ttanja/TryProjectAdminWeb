import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col,
  Card,
  Popconfirm,
  Button
} from "antd";
import React from "react";
import logo2 from "../picture/LOGO4.png";
import imageClothes from "../picture/FW19-lookbook-2075x1500-15-686x948.jpg";
import DrawerInfo from "./DrawerInfo";
import DrawerEdit from "./DrawerEdit";
import DrawerCreate from "./DrawerCreate";
import "../Style/Main.css";
import "../Style/App.css";
import RestService from "../service/rest.service";
import { realpath } from "fs";
import axios from "axios";

const { Content, Sider, Header } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
const rest = new RestService();

class Manage extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    formData: null,
    clothes: null
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  toggle = () => {
    console.log("toggle");
  };

  componentDidMount() {
    this.getData();
    this.getCloth(5);
  }

  getData = async () => {
    let getAllEvent = await rest.getAllEvent();
    let getAllPlace = await rest.getAllPlace();
    let womenShape = await rest.womenShape();
    let menShape = await rest.menShape();
    let cat = await rest.category();
    const formData = {
      events: getAllEvent.data,
      places: getAllPlace.data,
      women: womenShape.data,
      men: menShape.data,
      category: cat.data
    };
    this.setState({
      formData
    });
    console.log(this.state.formData);
  };

  getTop = async () => {
    let getClothesToShow = await rest.getClothesToShow();
    let cat = await rest.category();

    const formData = {
      category: cat.data
    };
  };

  getCloth = async id => {
    let resp = await rest.getClothByBrandAndCat({
      clotheBrand: "1",
      categoryId: id
    });
    this.setState({ clothes: resp.data });
  };

  confirm = async id => {
    let resp = await rest.deleteCloth({
      //userId:"1",
      id: id
    });
    this.getCloth()
  };

  render() {
    // console.log(this.state.events);

    return (
      <Layout style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "256px" }}>
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 256, minHeight: "120vh" }}
          >
            <div className="logo">
              <img src={logo2} className="Logo" />
            </div>

            {this.state.formData !== null ? (
              <DrawerCreate formData={this.state.formData} />
            ) : (
              <div></div>
            )}
            <Menu.Item key="1" onClick={e => this.getCloth(5)}>
              Top
            </Menu.Item>
            <Menu.Item key="2" onClick={e => this.getCloth(7)}>
              Jacket
            </Menu.Item>
            <Menu.Item key="3" onClick={e => this.getCloth(8)}>
              Bottom
            </Menu.Item>
            <Menu.Item key="4" onClick={e => this.getCloth(3)}>
              Shoes
            </Menu.Item>

            <Menu.Item key="7" onClick={e => this.getCloth(7)}>
              <Icon type="logout" />
              Logout
            </Menu.Item>
          </Menu>
        </div>
        <Layout>
          <Content>
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: 360,
                minHeight: "120vh"
              }}
            >
              <Row gutter={16}>
                {this.state.clothes == null ? (
                  <div></div>
                ) : (
                  this.state.clothes.map((data, key) => (
                    <Card
                      key={key}
                      style={{}}
                      cover={
                        <img
                          className="img-box"
                          alt="test"
                          src={data.clothePictureUrl}
                        />
                      }
                      actions={[
                        <DrawerInfo data={data}/>,
                        this.state.formData === null ? (
                          <div></div>
                        ) : (
                          <DrawerEdit
                            formData={this.state.formData}
                            data={data}
                          />
                        ),
                        <Popconfirm
                          title="Are you sure？"
                          okText="Yes"
                          onConfirm={e => this.confirm(data.id)}
                          cancelText="No"
                        >
                          <Icon type="delete" key="ellipsis" />
                        </Popconfirm>
                      ]}
                      hoverable={true}
                    >
                      <Meta
                        title={data.clotheName}
                        description={data.clotheDrescription}
                      />
                    </Card>
                  ))
                )}
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Manage;
