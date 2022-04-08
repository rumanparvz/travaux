import { Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRegistrationData } from "../../redux/actions/ProjectsActions";

const AllResults = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.service.registrationData);
  const onFinish = async (values) => {
    try {
      const newValues = {
        siretNo: parseInt(values.siretNo),
        companyName: values.companyName,
        address: values.address,
        postalCode: parseInt(values.postalCode)

      }
      const result = await axios.post('https://ancient-gorge-88070.herokuapp.com/auth/addSiret', newValues);
      if (result.data) {
        console.log("Success:", result.data);
        dispatch(addRegistrationData({ ...registrationData, siretNo: result?.data?.data?.siretNo }));
        navigate("/register/offerService");
      }
    } catch (e) {
      console.log("Error:", e.message);
    }
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
            name="siretNo"
            rules={[
              {
                required: true,
                message: "Siret!",
              },
            ]}
          >
            <Input placeholder="Number Siret" className="py-3" defaultValue={registrationData.siretNo} />
          </Form.Item>

          <Form.Item
            label=" Company Name"
            name="companyName"
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
            name="postalCode"
            rules={[
              {
                required: true,
                message: "Enter postal code",
              },
            ]}
          >
            <Input
              placeholder="Enter your postal code"
              className="py-3"
              defaultValue={registrationData.postalCode}
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
