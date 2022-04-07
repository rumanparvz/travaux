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
const CreateProducts = ({categoryId,setCategoryId}) => {
console.log('allah',categoryId.categoryById,'hoallah',categoryId.subCategoryById);

  const [disable, setDisable] = useState(false);
  const [loading,setLoading]=useState(false)
  const navigate= useNavigate()
  const onFinish = (values) => {
    setLoading(true)
    const newValue = {
        categoryId:categoryId.categoryById,
        title: values.title
    };
    console.log("newValue", newValue);
    axios.post('https://ancient-gorge-88070.herokuapp.com/api/createSubCategory',newValue)
    .then((res)=>{
      setCategoryId({...categoryId,subCategoryById:res.data.data._id})
      navigate('/admin/createSingleProduct')
      setLoading(false)
    })
    // POST 
    // category.postService(newValue)

    
    setDisable(true);
  };

  return (
    <div className="w-75 pt-5">
       <Step number={1} />
      <h1 className="text-center py-4">Add JOB SERVICE POST </h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >

        <Form.Item name={["title"]} label="Title" rules={[{ required: true }]}>
          <Input placeholder="Title"/>
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

export default CreateProducts;
