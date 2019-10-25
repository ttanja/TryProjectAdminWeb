import {
  Drawer,
  Input,
  Form,
  Icon,
  Upload,
  message,
  Select,
  Button,
  Checkbox,
  Col,
  Row,
  Divider
} from "antd";

import React from "react";

const { Option } = Select;

const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class DrawerEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  componentDidMount() {
    console.log(this.props);
  }

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

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div>
        <Icon type="edit" key="edit" onClick={this.showDrawer} />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            <p style={{ ...pStyle, marginBottom: 24 }}>Edit Clothes Detail</p>
          </div>
          <Divider />
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item
              label="Upload"
            >
              {getFieldDecorator("upload", {
                valuePropName: "fileList",
                getValueFromEvent: this.normFile
              })(
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              )}
            </Form.Item>

            <Form.Item label="Brand Name">
              {getFieldDecorator("brandofclothes", {
                rules: [{ required: true, message: "Please input brand name!" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [
                  { required: true, message: "Please input description!" }
                ]
              })(<Input />)}
            </Form.Item>
            <Divider />
            <Form.Item label="Event">
              {getFieldDecorator("event", {
                initialValue: ["A", "B"]
              })(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    <Col span={10}>
                      <Checkbox value="A">Party</Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="B">Wedding</Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="C">Make Merit </Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="D">Funeral</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Divider />
            <Form.Item label="Event Type">
              {getFieldDecorator("event-type", {
                initialValue: ["A", "B"]
              })(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    <Col span={10}>
                      <Checkbox value="A">Beach</Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="B">Hotel</Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="C">Bar</Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="D">Resturant</Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="E">Temple</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Divider />
            <Form.Item label="Shape">
              {getFieldDecorator("shape", {
                initialValue: ["A", "B"]
              })(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    <Col span={15}>
                      <Checkbox value="A">Pear</Checkbox>
                    </Col>
                    <Col span={15}>
                      <Checkbox value="B">Hourglass</Checkbox>
                    </Col>
                    <Col span={15}>
                      <Checkbox value="C">Apple</Checkbox>
                    </Col>
                    <Col span={15}>
                      <Checkbox value="D">Oval</Checkbox>
                    </Col>
                    <Col span={15}>
                      <Checkbox value="E">Diamond</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="edit">
              Edit
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(DrawerEdit);
