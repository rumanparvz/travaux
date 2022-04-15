import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ServiceStep from "./serviceSteps";
import { addToProductData } from "../../redux/actions/ProjectsActions";
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
    const [disable, setDisable] = useState(false);
    const [select, setSelect] = useState(null);
    const [jobs, setJobs] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [selectCategoryId, setSelectCategoryId] = useState('');
    const [selectSubCategoryId, setSelectSubCategoryId] = useState('');
    const [imageLoader, setImageLoader] = useState(false);
    const [logoLoader, setLogoLoder] = useState(false);
    const [image, setImage] = useState("");
    const [logo, setLogo] = useState("");
    const dispatch = useDispatch()

    const handleSetSubcategoryId = (id) => {
        setSelectSubCategoryId(id)
        console.log(id)
    }

    const handleGetSubCategory = (categoryId) => {
        setSelectCategoryId(categoryId);
        axios.get(`https://ancient-gorge-88070.herokuapp.com/api/getSubcategoryByCategoryId/${categoryId}`)
            .then((res) => {
                console.log(res)
                const responses = res?.data?.data.map(response => {
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
            categoryId: selectCategoryId,
            subCategoryId: selectSubCategoryId,
            title: values.title,
            description: values.description,
            price: values.number,
            bannerImage: image,
            image: logo,
        };
        dispatch(addToProductData(newValue))
        console.log(newValue);
        // CREATE PRODUCT
        // axios
        //     .post(
        //         "https://ancient-gorge-88070.herokuapp.com/api/createProduct",
        //         newValue
        //     )
        //     .then((res) => {
        //         console.log(res);
        //         navigate("/");
        //     });
        navigate("/admin/createAdditionalData");

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

    useEffect(() => {
        getCategory();
    }, []);
    console.log(jobs);



    return (
        <div className="w-75 pt-5">
            <ServiceStep number={0} />
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
                            <Select onChange={handleSetSubcategoryId}>
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

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} disabled>
                    <Button type="primary" htmlType="submit">
                        Next
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateSingleService;
