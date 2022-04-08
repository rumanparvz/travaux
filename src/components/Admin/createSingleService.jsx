import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
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
const CreateSingleService = ({ categoryId }) => {
    console.log(
        "allah",
        categoryId.categoryById,
        "hoallah",
        categoryId.subCategoryById
    );

    const [disable, setDisable] = useState(false);
    const [select, setSelect] = useState(null);
    const [jobs, setJobs] = useState([])
    const [subCategories, setSubCategories] = useState([])

    const handleGetSubCategory = (categoryId) => {
        console.log({categoryId})
        axios.get(`https://ancient-gorge-88070.herokuapp.com/api/getSubcategoryByCategoryId/${categoryId}`)
            .then((res) => {
                console.log(res)
                const responses = res?.data?.data.map(response=>{
                    const responseObj = {};
                    responseObj.id = response._id;
                    responseObj.name = response.title;
                    return responseObj;
                })
                setSubCategories(responses)
            })
    }

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
                navigate("/");
            });

        // POST
        // category.postService(newValue)

        setDisable(true);
    };

    const getCategory = async () => {
        const categories = await axios.get("https://ancient-gorge-88070.herokuapp.com/api/category");
        const newCategory = categories?.data?.data.map((category) => {
            const categoryObj = {};
            categoryObj.id = category._id;
            categoryObj.name = category.title;
            return categoryObj;
        })
        setJobs(newCategory);
    }

    useEffect(() => {
        getCategory();
    }, []);
    console.log(jobs);

    return (
        <div className="w-75 pt-5">
            <h1 className="text-center py-4">Create Single Product </h1>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item name={["category"]} label="Category" rules={[{ required: true }]}>
                    <Select onChange={handleGetSubCategory}>
                    {
                        jobs.map((job, index) => <option key={job.id} value={job.id} selected={index === 0}>{index === 0 && '🔎'}{job.name}</option>)
                    }
                    </Select>
                    </Form.Item>
                    {
                        subCategories.length ?  
                        <Form.Item name={["subCategory"]} label="Sub Category" rules={[{ required: true }]}>
                        <Select >
                        {
                            subCategories.map((subCategory, index) => <option key={subCategory.id} value={subCategory?.id} selected={index === 0}>{subCategory?.name}</option>)
                        }
                        </Select> 
                        </Form.Item>
                        : ''
                    }
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

export default CreateSingleService;
