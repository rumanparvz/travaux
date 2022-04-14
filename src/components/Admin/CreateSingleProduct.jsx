import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { category } from "../../services/ServiceCategory/ServiceCategory";
import Step from "./Step";

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
const CreateSingleProduct = ({ categoryId }) => {

  const [disable, setDisable] = useState(false);

  const navigate = useNavigate();
  const onFinish = (values) => {
    const newValue = {
      categoryId: categoryId.categoryById,
      subCategoryId: categoryId.subCategoryById,
      title: values.title,
      description: values.description,
      price: values.number,
    };
    console.log(newValue);
    // CREATE PRODUCT
    axios
      .post(
        "https://ancient-gorge-88070.herokuapp.com/api/createProduct",
        newValue
      )
      .then((res) => {
        console.log(res);
        navigate("/admin/createSingleService");
      });

    // POST
    // category.postService(newValue)

    setDisable(true);
  };

  return (
    <div className="w-75 pt-5">
      <Step number={2} />
      <h1 className="text-center py-4">Create Single Product </h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={["title"]} label="Title" rules={[{ required: true }]}>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item name={["description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["number"]} label="Number">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} disabled>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateSingleProduct;
