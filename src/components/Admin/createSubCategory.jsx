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
    const [imageLoader, setImageLoader] = useState(false);
    const handleSetOptions = (id) => {
        setCategoryId(id)
    }
    const navigate = useNavigate()
    const onFinish = (values) => {
        setLoading(true)
        const newValue = {
            categoryId: categoryId,
            title: values.title,
            additionalInfo
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

    const [additionalInfo, setAdditionalInfo] = useState([]);
    const [questions, setQuestions] = useState({});
    const [options, setOptions] = useState([]);

    const handleQuestions = (e) => {
        const newAdditionalInfo = {}
        newAdditionalInfo[e.target.name] = e.target.value
        setQuestions({ ...questions, ...newAdditionalInfo })
    }
    const [optionsObj, setOptionsObj] = useState({});
    const [image, setImage] = useState([]);

    const handleOptions = (e, id) => {
        const newOptions = [];
        const newOptionsObj = {};

        if (e.target.type === 'text') {
            newOptionsObj[e.target.name] = e.target.value
            newOptionsObj.id = id
        } else {
            setImageLoader(true)
            const imageFile = e.target.files[0];
            const data = new FormData();
            data.append("file", imageFile);
            data.append("upload_preset", "serviceImages");
            data.append("cloud_name", "dzghsspe7");
            if (imageFile) {
                axios
                    .post("https://api.cloudinary.com/v1_1/dzghsspe7/image/upload", data)
                .then((res) => {
                    console.log({ res: res.data.url })
                    newOptionsObj.file = res.data.url
                    setImage([...image, { id: id, file: res.data.url }])

                    setImageLoader(false);
                })
            }
        }
        console.log(newOptionsObj)
        setOptionsObj({ ...optionsObj, ...newOptionsObj });
    }
    console.log(image)

    const handleAddAdditionalInfo = () => {
        const newAdditionalInfo = {
            title: questions.title,
            type: questions.type,
            keyword: questions.keyword,
            options: options.map(option => {
                const newOption = {};
                newOption.name = option.name;
                for (const img of image) {
                    if (img.id === option.id) {
                        newOption.icon = img.file
                    }
                }
                return newOption;
            })
        }
        setAdditionalInfo([...additionalInfo, newAdditionalInfo])
        setQuestions({})
        setOptionsObj({})
    }

    console.log(additionalInfo);

    useEffect(() => {
        if (optionsObj.id) {
            const newOptions = [...options];
            const optionsId = options.filter(option => option.id === optionsObj.id);
            if (optionsId.length > 0) {
                const index = newOptions.indexOf(optionsId[0]);
                newOptions[index] = optionsObj;
                setOptions(newOptions);
            } else {
                newOptions.push(optionsObj);
                setOptions(newOptions);
            }
        }
    }, [optionsObj])

    useEffect(() => {
        getCategory();
    }, []);
    console.log(options);

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
                {
                    additionalInfo.length && <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} disabled className="mt-3 ms-5">
                        {!loading && (
                            <Button type="primary" htmlType="submit" className="ms-5">
                                Submit Form
                            </Button>
                        )}
                        {loading && <div class="spinner-border" role="status"></div>}
                    </Form.Item>
                }
            </Form>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h3>Additional Info</h3>
                <p>Add some questions</p>
                <div className="d-flex">
                    <input type="text" name="title" placeholder="Enter your questions" onBlur={handleQuestions} />
                    <input type="text" name="type" className="d-flex ms-5" placeholder="Type" onBlur={handleQuestions} />
                    <input type="text" name="keyword" className="d-flex ms-5" placeholder="Keyword" onBlur={handleQuestions} />
                </div>
                <p>Add some options</p>
                <div className="ms-5">
                    <div className="d-flex ms-5">
                        <input type="text" name="name" placeholder="options 1" className="mt-0" onBlur={(e) => handleOptions(e, 1)} />
                        <input type="file" name="file" className="d-flex ms-5 mt-0" onChange={(e) => handleOptions(e, 1)} />
                    </div>
                    <div className="d-flex ms-5">
                        <input type="text" name="name" placeholder="options 2" className="mt-3" onBlur={(e) => handleOptions(e, 3)} />
                        <input type="file" name="file" className="d-flex ms-5 mt-3" onBlur={(e) => handleOptions(e, 3)} />
                    </div>
                    <div className="d-flex ms-5">
                        <input type="text" name="name" placeholder="options 3" className="mt-3" onBlur={(e) => handleOptions(e, 5)} />
                        <input type="file" name="file" className="d-flex ms-5 mt-3" onChange={(e) => handleOptions(e, 5)} />
                    </div>
                    <div className="d-flex ms-5">
                        <input type="text" name="name" placeholder="options 3" className="mt-3" onBlur={(e) => handleOptions(e, 7)} />
                        <input type="file" name="file" className="d-flex ms-5 mt-3" onChange={(e) => handleOptions(e, 7)} />
                    </div>
                    <div className="d-flex ms-5">
                        <input type="text" name="name" placeholder="options 4" className="mt-3" onBlur={(e) => handleOptions(e, 9)} />
                        <input type="file" name="file" className="d-flex ms-5 mt-3" onChange={(e) => handleOptions(e, 9)} />
                    </div>
                    {
                        imageLoader && <div className="spinner-border" role="status"></div>
                    }
                    <button className="ms-5" onClick={handleAddAdditionalInfo}>Add Info</button>
                </div>
            </div>

        </div>
    );
};

export default CreateSubCategory;
