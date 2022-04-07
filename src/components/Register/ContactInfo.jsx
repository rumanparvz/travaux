import { Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
    const navigate= useNavigate()
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate('/register/serit')
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container w-50 m-auto pt-5 pb-5">
      <h2>
        We have <span className="text-primary"> 492 construction projects</span>{" "}
        that suit you
      </h2>
      <p>Create your professional account to access it</p>
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
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Enter your first name" className="py-3" />
        </Form.Item>

        <Form.Item
          label=" Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Enter your  name" className="py-3" />
        </Form.Item>

        <Form.Item
          label=" Telephone"
          name="number"
          rules={[
            {
              required: true,
              message: "Telephone Number required!",
            },
          ]}
        >
          <Input
            placeholder="Your number for your future customers"
            className="py-3"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Create  your password"
            className="py-3"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 5,
            span: 10,
          }}
        >
          <button className="register_button w-md-75 me-auto">
            To Continue
          </button>
        </Form.Item>
      </Form>

      <div className="footer  text-center w-75">
        By clicking on "Continue", I accept the{" "}
        <a href="!#" className="text-primary">
          General Conditions
        </a>{" "}
        , the{" "}
        <a href="!#" className="text-primary">
          Privacy Policy
        </a>{" "}
        and to receive commercial offers from Travaux.com. I can unsubscribe
        using the unsubscribe links or by contacting
        <span className="text-primary">confidentialite@travaux.com</span> . I
        understand that I will be contacted again to receive commercial offers
        from Travaux.com by telephone, email, SMS or post. In accordance with
        the Data Protection Act of 06/01/1978, I have the right to access,
        rectify and delete my data.
      </div>
    </div>
  );
};

export default ContactInfo;
