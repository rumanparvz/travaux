import { Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllResults = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/register/offerService");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="container w-50 m-auto pt-5 pb-5">
        <h2>
          No result
        </h2>
        <p>Your business was not found. Please fill in the fields to fill in your company information. We will verify this information.</p>
        <Form
          name="basic"
          labelCol={{
            span: 0,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="siret"
            rules={[
              {
                required: true,
                message: "Siret!",
              },
            ]}
          >
            <Input placeholder="Number Siret" className="py-3" />
          </Form.Item>

          <Form.Item
            label=" Company Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <Input placeholder="Enter your  name" className="py-3" />
          </Form.Item>

          <Form.Item
            label=" Address"
            name="address"
            rules={[
              {
                required: true,
                message: " company address",
              },
            ]}
          >
            <Input
              placeholder="Enter your company address"
              className="py-3"
            />
          </Form.Item>

          <Form.Item
            label="Postal code"
            name="number"
            rules={[
              {
                required: true,
                message: "Enter postal code",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your postal code"
              className="py-3"
            />
          </Form.Item>

          <div className="w-25">
            <button className="register_button  me-auto">To Continue</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AllResults;
