import { Drawer, List, Avatar, Divider, Col, Row ,Icon} from 'antd';
import React, { Component } from 'react'
const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class DrawerPage extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Icon type="info-circle" key="setting" onClick={this.showDrawer}/>
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}> Clothes Detail</p>
            <Col>
              <DescriptionItem title="Name Brand" content="VATANIKA" />
            </Col>
            <Divider />
            <Col>
              <DescriptionItem title="Description" content="CHECKED WOOL-BLEND AND CREPE OFF SHOULDER WIDE-LEG JUMPSUIT" />
            </Col>
            <Divider />
            <Col span={12}>
              <DescriptionItem title="Type" content="Party" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Event Type" content="Hotel" />
            </Col>
            <Divider />
            <Col>
              <DescriptionItem title="Shape" content="Hourglass" />
            </Col>

          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default DrawerPage;