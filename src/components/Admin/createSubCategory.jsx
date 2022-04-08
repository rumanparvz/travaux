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
const CreateSubCategory = () => {
    const [jobs, setJobs] = useState([])

    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const handleSetOptions = (id) => {
        setCategoryId(id)
    }
    const navigate = useNavigate()
    const onFinish = (values) => {
        setLoading(true)
        const newValue = {
            categoryId: categoryId,
            title: values.title
        };
        console.log(newValue);
        console.log("newValue", newValue);
        axios.post('https://ancient-gorge-88070.herokuapp.com/api/createSubCategory', newValue)
            .then((res) => {
                // navigate('/admin/createSingleProduct')
                setLoading(false)
                console.log(res)
            })
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
            <h1 className="text-center py-4">Add JOB SERVICE POST </h1>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >

                <Form.Item name={["category"]} label="Category" rules={[{ required: true }]}>
                    <Select onChange={handleSetOptions}>
                        {
                            jobs.map((job, index) => <option key={job.id} value={job.id} defaultValue={jobs[0]?.name}>{job.name}</option>)
                        }
                    </Select>
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

export default CreateSubCategory;
