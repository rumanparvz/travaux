import { Breadcrumb, Button, Checkbox, Form, Input, message, Select, Upload } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },

  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  progress: {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068"
    },
    strokeWidth: 3,
    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`
  }
};
const MyProjectEdit = () => {

      const onFinish = (values) => {
        console.log("Success:", values);
      };

    return (
      <div>
        <NavBar />
        <div className="container">
          <Breadcrumb className="py-5">
            <Breadcrumb.Item>
              <Link to="/" className="text-primary">
                Welcome
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/my-project" className="text-primary">
                My projects
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-secondary">
              Cover/Roof: Replacement; 55; Not urgent (end date){" "}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="editable_content">
            <h2 className="py-5" style={{ fontWidth: 500 }}>
              Modify the project
            </h2>
            <h4 className="py-3" style={{ fontWidth: 500 }}>
              Cover/roof installation or renovation ({" "}
              <Link
                to="#"
                className="text-primary"
                style={{ fontSize: "20px" }}
              >
                modify
              </Link>{" "}
              )
            </h4>
            <div className="form_content w-50">
              <Form onFinish={onFinish} layout="vertical">
                <h5>Title of your project</h5>
                <Form.Item
                  label="For example: Painting the walls of a 30m2 dining room"
                  name="projectTitle"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!"
                    }
                  ]}
                  //   wrapperCol={{
                  //     span: 8
                  //   }}
                >
                  <Input defaultValue="Couverture/Toiture: Remplacement; 55; Pas urgent (date de fin)" />
                </Form.Item>
                <h5>What is the nature of your work?</h5>
                <Form.Item
                  label="New construction: construction without roof; Replacement: existing roof structure; Repair: damage and maintenance."
                  name="natureWork"
                  rules={[
                    {
                      required: true,
                      message: "Please input your work!"
                    }
                  ]}
                  //   wrapperCol={{
                  //     span: 8
                  //   }}
                >
                  <Select
                    defaultValue="--Choose--"
                    style={{
                      width: 300
                    }}
                  >
                    <Option value="construction">Now construction</Option>
                    <Option value="replacement">Replacement</Option>
                    <Option value="repair">Repair</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="What type of roof is affected by this project?"
                  name="affected_project"
                  rules={[
                    {
                      required: true,
                      message: "Please input your work!"
                    }
                  ]}
                >
                  <Select
                    defaultValue="--Choose--"
                    style={{
                      width: 300
                    }}
                  >
                    <Option value="inclied">Inclied</Option>
                    <Option value="dish">Dish</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="What is the roofing material?"
                  name="material"
                  rules={[
                    {
                      required: true,
                      message: "Please input your roofing material!"
                    }
                  ]}
                >
                  <Select
                    defaultValue="--Choose--"
                    style={{
                      width: 300
                    }}
                  >
                    <Option value="roof tiles">Roof tiles</Option>
                    <Option value="slate">Slate</Option>
                    <Option value="To define">To define</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Are the works urgent?"
                  name="isUrgent"
                  rules={[
                    {
                      required: true,
                      message: "Please input your work urgent!"
                    }
                  ]}
                >
                  <Select
                    defaultValue="--Choose--"
                    style={{
                      width: 300
                    }}
                  >
                    <Option value="urgent">Urgent</Option>
                    <Option value="not_urgent">Not urgent</Option>
                  </Select>
                </Form.Item>

                <p>Important additional information (optional)</p>
                <Form.Item
                  label="For example: type the property (residential apartment, independent) date of completion of the work, the attic (house, extension, garage), history of the building, and other important information that you wish to share."
                  name="additional_information"
                >
                  <Input.TextArea defaultValue="test" />
                </Form.Item>

                <p>Add attachments (optional)</p>
                <Form.Item
                  label="Images, documents and text files are allowed. The maximum size allowed is 15 MB."
                  name="additional_information"
                >
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  name="responded"
                >
                  <Checkbox /> { ' '}  Send my edits to all professionals who have already responded.    (optional)
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    To Safeguard
                  </Button>
                  <Button className="ms-3">To Cancel</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
};

export default MyProjectEdit;