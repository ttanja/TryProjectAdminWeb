import { Drawer, Divider, Col, Icon } from "antd";
import React from "react";
import RestService from "../service/rest.service";

const rest = new RestService();

const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7,
      color: "rgba(0,0,0,0.65)"
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: "inline-block",
        color: "rgba(0,0,0,0.85)"
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class DrawerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      formData: null,
      brand: null,
      event:null,
      places:null,
      shape:null
    };
  }

  async componentDidMount() {
    console.log(this.props);
    await this.getBrandName(this.props.data.clotheBrand);
    await this.getShapebyId(this.props.data.id);
    await this.getPlaceById(this.props.data.id);
    await this.getEventbyId(this.props.data.id);
  }
  getShapebyId = async id => {
    let resp = await rest.getShape({ id: id });
    let arr = [];
    resp.data.map(ind => {
      arr.push(ind.id);
    });
    this.setState({ shape: arr });
  };

  getEventbyId = async id => {
    let resp = await rest.getEvent({ id: id });
    let arr = [];
    resp.data.map(ind => {
      arr.push(ind.id);
    });
    this.setState({ event: arr });
  };

  getPlaceById = async id => {
    let resp = await rest.getPlace({ id: id });
    let arr = [];
    resp.data.map(ind => {
      arr.push(ind.id);
    });
    this.setState({ places: arr });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  getBrandName = async clotheBrand => {
    let resp = await rest.getBrandName({ id: clotheBrand });
    this.setState({ brand: resp.data[0] });
    console.log(resp);
  };

  // renderClotheBrand = () => {
  //   this.state.formData === null ? (
  //     <div></div>
  //   );
  // };

  render() {
    return (
      <div>
        <Icon type="info-circle" key="setting" onClick={this.showDrawer} />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>Clothes Detail</p>
          <Col>
            {this.state.brand === null ? (
              <div></div>
            ) : (
              <DescriptionItem
                title="Name Brand"
                content={this.state.brand.brandName}
              />
            )}
          </Col>
          <Divider />
          <Col>
            <DescriptionItem
              title="Description"
              content={this.props.data.clotheDrescription}
            />
          </Col>
          <Divider />
          <Col span={12}>
            <DescriptionItem title="Event" content={this.state.event} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Place" content={this.state.places} />
          </Col>
          <Divider />
          <Col>
            <DescriptionItem title="For Shape" content={this.state.shape} />
          </Col>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default DrawerInfo;
