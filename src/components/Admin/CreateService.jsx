import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { category } from "../../services/ServiceCategory/ServiceCategory";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */
const CreateService = () => {
  const [serviceImage, setServiceImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);

  const [disable, setDisable] = useState(false);

  const onFinish = (values) => {
    const newValue = {
      image: serviceImage,
      logo: logoImage,
      title: values.title,
      description: values.description,
      createdAt:new Date()
    };
    console.log("newValue", newValue);
    // POST 
    category.postService(newValue)

    
    setDisable(true);
  };

  return (
    <div className="w-75 pt-5">
      <img src={serviceImage} alt="" />
      <h1 className="text-center py-4">Add JOB SERVICE POST </h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["image"]}
          label="Banner Image"
          rules={[{ required: false }]}
        >
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setServiceImage(base64)}
          />
        </Form.Item>

        <Form.Item
          name={["logo"]}
          label="Upload a logo"
          rules={[{ required: false }]}
        >
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setLogoImage(base64)}
          />
        </Form.Item>
        <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter-name" />
        </Form.Item>

        <Form.Item name={["description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["title"]} label="Title" rules={[{ required: true }]}>
          <Input placeholder="Title"/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} disabled>
          <Button type="primary" htmlType="submit" disabled={disable}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateService;
