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
import { storage } from "../Firebase/Index";

const rest = new RestService();
const { Option } = Select;

const pStyle = {
  fontSize: 16,
  color: "rgba(0,0,0,0.85)",
  lineHeight: "24px",
  display: "block",
  marginBottom: 16
};

class DrawerCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      formData: null,
      type: "u",
      categoryId: "Top",
      image: null,
      url: "",
      progress: 0, 
    };
    this.handleChangePhoto = this.handleChangePhoto.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    
  }

  handleChangePhoto = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on("state_changed", () => {
      // complete function ....
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          this.setState({ url });
        });
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

  renderCategory = () => {
    let category = this.props.formData.category;
    return category.map((data, index) => (
      <Radio key={index} value={data.id}>
        {data.categoryName}
      </Radio>
    ));
  };
  


  renderShapType = () => {
    if (this.state.type === "u") {
      let men = this.props.formData.men;
      let women = this.props.formData.women;
      let unisex = men.concat(women);
      return unisex.map((data, index) => (
        <Col span={15} keys={index}>
          <Checkbox value={data.id}>{data.shapeName}</Checkbox>
        </Col>
      ));
    }
    if (this.state.type === "m") {
      return this.props.formData.men.map((data, index) => (
        <Col span={15} keys={index}>
          <Checkbox value={data.id}>{data.shapeName}</Checkbox>
        </Col>
      ));
    }

    if (this.state.type === "w") {
      return this.props.formData.women.map((data, index) => (
        <Col span={15} keys={index}>
          <Checkbox value={data.id}>{data.shapeName}</Checkbox>
        </Col>
      ));
    }
  };

  handleSubmit = async e => {
    console.log("UPLOAD 1")
    const { image } = this.state;
    const snapshot = await storage.ref(`images/${image.name}`).put(image)
    const url = await snapshot.ref.getDownloadURL()
          this.props.form.validateFields(async (err, values) => {
            if (!err) {
              console.log("Received values of form: ", values);
              var image = url;
              var clothesName = values.nameofclothes;
              var description = values.description;
              var link = values.link;
              var event = values.event;
              var place = values.place;
              var gender = this.state.type;
              var shape = values.shape;
              var cat = values.category;
              var clotheBrand = this.state.user.brandGoogleId;
              
              try {
                await rest.addCloth({
                  clotheName: clothesName,
                  clothePictureUrl: url,
                  clotheGender: gender,
                  categoryId_id: cat,
                  clotheDrescription: description,
                  clotheLinkToBuy: link,
                  clotheBrand_id: clotheBrand,
                  event: event,
                  place: place,
                  shape: shape
                });
              } catch (error) {
                console.log(error)
              }
            }
          });
          this.onClose();
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
          >
            <Form.Item
              label="Upload"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <img
                src={this.state.url || "http://via.placeholder.com/100x100"}
                height="100"
                width="100"
              />
              <br />
              <input type="file" onChange={this.handleChangePhoto} />
              <br />
            </Form.Item>
            <Form.Item label="Clothes Name">
              {getFieldDecorator("nameofclothes", {
                rules: [
                  { required: true, message: "Please input clothes name!" }
                ]
              })(<Input name="clothesName" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [
                  { required: true, message: "Please input description!" }
                ]
              })(<Input name="description" />)}
            </Form.Item>
            <Form.Item label="Category:">
              {getFieldDecorator("category", {})(
                <Radio.Group style={{ width: "100%" }}>
                  {this.renderCategory()}
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="Link">
              {getFieldDecorator("link", {
                rules: [{ required: true, message: "Please input link!" }]
              })(<Input name="link" />)}
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
                        <Checkbox value={data.id}>{data.event}</Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Divider />
            <Form.Item label="Place">
              {getFieldDecorator("place", {
                initialValue: ["A", "B"]
              })(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    {this.props.formData.places.map((data, index) => (
                      <Col span={10} keys={index}>
                        <Checkbox value={data.id}>{data.place}</Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              )}
            </Form.Item>
            <Divider />
            <Form.Item label="Gender:">
              <Radio.Group onChange={this.onChange} value={this.state.type}>
                <Radio value="u">UNISEX</Radio>
                <Radio value="m">MAN</Radio>
                <Radio value="w">WOMAN</Radio>
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
              <Button type="primary" onClick={this.handleSubmit}>
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
