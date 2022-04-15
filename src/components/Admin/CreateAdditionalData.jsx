import React from 'react';
import { Button, Form, Input, Select } from "antd";
import ServiceStep from './serviceSteps';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreateAdditionalData = () => {
    const [tableData, setTableData] = React.useState([]);
    const [tableObject, setTableObject] = React.useState({});
    const [additionalData, setAdditionalData] = React.useState([]);
    const [additionalDataObject, setAdditionalDataObject] = React.useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const productsData = useSelector(state => state.service.productsData)
    console.log({ productsData })
    const onFinish = (values) => {
        const newValue = {
            ...productsData,
            tableData, additionalInfo: additionalData
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

    };
    const handleChange = (e, key) => {
        const newObj = {};
        newObj[e.target.name] = e.target.value;
        if (key === 'table') {
            setTableObject({ ...tableObject, ...newObj })
        } else {
            setAdditionalDataObject({ ...additionalDataObject, ...newObj })
        }

    }

    const handleSetTableData = () => {
        setTableData([...tableData, tableObject])
        setTableObject({
            type: '',
            minPrice: '',
            maxPrice: '',
            feature: ''
        })
    }
    const handleSetAdditionalData = () => {
        setAdditionalData([...additionalData, additionalDataObject])
        setAdditionalDataObject({
            title: '',
            description: ''
        })
    }
    return (
        <div className="w-75 pt-5">
            <ServiceStep number={1} />
            <h1 className="text-center py-4">Create Additional Data </h1>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h6 className="text-center"> Add min max price </h6>
                <input type="text" name="type" placeholder="product type" className="form-control w-75 mt-2" value={tableObject.type} onChange={(e) => handleChange(e, 'table')} />
                <input type="number" name="minPrice" placeholder="min price" className="form-control w-75 mt-2" value={tableObject.minPrice} onChange={(e) => handleChange(e, 'table')} />
                <input type="number" name="maxPrice" placeholder="max price" className="form-control w-75 mt-2" value={tableObject.maxPrice} onChange={(e) => handleChange(e, 'table')} />
                <input type="text" name="feature" placeholder="feature" className="form-control w-75 mt-2"
                    value={tableObject.feature} onChange={(e) => handleChange(e, 'table')} />
                <button className="btn btn-info mt-2" onClick={handleSetTableData}>{tableData.length ? 'Add another one' : 'Add'}</button>
            </div>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h6 className="text-center mt-5"> Add some info </h6>
                <input type="text" name="title" placeholder="title" className="form-control w-75 mt-2" value={additionalDataObject?.title} onChange={(e) => handleChange(e, 'info')} />
                <textarea type="text" name="description" placeholder="description" value={additionalDataObject?.description} className="form-control w-75 mt-2" onChange={(e) => handleChange(e, 'info')} > </textarea>
                <button className="btn btn-info mt-2" onClick={handleSetAdditionalData}>{additionalData.length ? 'Add another Info' : 'Add Info'}</button>
            </div>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <button className="btn btn-success mt-2" onClick={onFinish}>Submit Product</button>
            </div>

        </div>

    );
};

export default CreateAdditionalData;