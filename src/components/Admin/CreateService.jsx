import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
const CreateService = ({ categoryId, setCategoryId }) => {
  const [serviceImage, setServiceImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoader, setImageLoader] = useState(false);
  const [logoLoader, setLogoLoder] = useState(false);
  const [image, setImage] = useState("");
  const [logo, setLogo] = useState("");

  console.log('image',image);
  console.log('logo',logo);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setImageLoader(true);
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "serviceImages");
    data.append("cloud_name", "dzghsspe7");
    axios
      .post("https://api.cloudinary.com/v1_1/dzghsspe7/image/upload", data)
      .then((res) => {
        setImage(res.data.url);
        setImageLoader(false);
      });
  };

  const handleLogoUpload = (e) => {
    setLogoLoder(true);
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "serviceImages");
    data.append("cloud_name", "dzghsspe7");
    axios
      .post("https://api.cloudinary.com/v1_1/dzghsspe7/image/upload", data)
      .then((res) => {
        setLogo(res.data.url);
        setLogoLoder(false);
      });
  };

  const onFinish = (values) => {
    setLoading(true);

    const newValue = {
      // image: serviceImage,
      image: image,
      icon: logo,
      title: values.title,
      description: values.description,
      createdAt: new Date(),
    };
console.log("newData",newValue);
    axios
      .post(
        "https://ancient-gorge-88070.herokuapp.com/api/createCategory",
        newValue
      )
      .then((res) => {
        setCategoryId({ ...categoryId, categoryById: res.data.category._id });
        navigate("/admin/createProduct");
        setLoading(false);
      });

    // POST
    // category.postService(newValue)
    // .then((res)=>{
    //   console.log('value',res);
    // })
    // .catch((err)=>console.log(err))
    // setDisable(true);
  };

  return (
    <div className="w-75 pt-5">
      <Step number={0} />
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
               {imageLoader && (
          <div class="spinner-border text-success" role="status"></div>
        )}
          <input type="file" name="image" id="image" onChange={handleImageUpload} />
        </Form.Item>

        <Form.Item
          name={["logo"]}
          label="Upload a logo"
          rules={[{ required: false }]}
        >
             {logoLoader && (
          <div class="spinner-border text-success" role="status"></div>
        )}
          <input type="file" name="logo" id="logo" onChange={handleLogoUpload} />
        </Form.Item>
        {/* <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter-name" />
        </Form.Item> */}

        <Form.Item name={["description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["title"]} label="Title" rules={[{ required: true }]}>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} disabled>
          {!loading && (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
          {loading && <div class="spinner-border" role="status"></div>}
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateService;
