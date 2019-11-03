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
  Radio,
  Divider
} from "antd";
import React from "react";
import RestService from "../service/rest.service";

const rest = new RestService();
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

class DrawerCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      formData: null,
      type: "UNISEX"
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
    console.log("===============>", this.props);
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

  renderShapType = () => {
    if (this.state.type === "UNISEX") {
      let men = this.props.formData.men;
      let women = this.props.formData.women;
      let unisex = men.concat(women);
      return unisex.map((data, index) => (
        <Col span={15} keys={index}>
          <Checkbox value={data.shapeName}>{data.shapeName}</Checkbox>
        </Col>
      ));
    }
    if (this.state.type === "MAN") {
      return this.props.formData.men.map((data, index) => (
        <Col span={15} keys={index}>
          <Checkbox value={data.shapeName}>{data.shapeName}</Checkbox>
        </Col>
      ));
    }

    if (this.state.type === "WOMAN") {
      return this.props.formData.women.map((data, index) => (
        <Col span={15} keys={index}>
          <Checkbox value={data.shapeName}>{data.shapeName}</Checkbox>
        </Col>
      ));
    }
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
    // console.log("Brandname : ",e.target.brandname.value);
    // console.log("Description : ",e.target.description.value);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        var brandName = values.brandofclothes;
        var description = values.description;
        var link = values.link;
        var event = values.event;
        var eventType = values["event-type"];
        var shape = values.shape;

        console.log("Brandname : ",brandName,"\nDescription : ",description,"\nEvent : ",event,
        "\nEvent Type : ",eventType,"\nShape : ",shape);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      type: e.target.value
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
        <button className="AddClothes" onClick={this.showDrawer}>
          <div className="fontStyle">+ ADD CLOTHES</div>
        </button>
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            <p style={{ ...pStyle, marginBottom: 24 }}>Add Clothes</p>
          </div>
          <Divider />
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item label="Upload">
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
              })(<Input name="brandname"/>)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [
                  { required: true, message: "Please input description!" }
                ]
              })(<Input name="description"/>)}
            </Form.Item>
            <Divider />
            <Form.Item label="Event">
              {getFieldDecorator("event", {
                initialValue: ["A", "B"]
              })(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    {this.props.formData.events.map((data, index) => (
                      <Col span={10} keys={index}>
                        <Checkbox value={data.event}>{data.event}</Checkbox>
                      </Col>
                    ))}
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
                    {this.props.formData.places.map((data, index) => (
                      <Col span={10} keys={index}>
                        <Checkbox value={data.place}>{data.place}</Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Divider />
            <Form.Item label="Gender:">
              <Radio.Group onChange={this.onChange} value={this.state.type}>
                <Radio value="UNISEX">UNISEX</Radio>
                <Radio value="MAN">MAN</Radio>
                <Radio value="WOMAN">WOMAN</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Shape">
              {getFieldDecorator("shape", {
                initialValue: ["A", "B"]
              })(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>{this.renderShapType()}</Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="add">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(DrawerCreate);
