import { Form, Input } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillLike, AiTwotoneMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { TiRadarOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRegistrationData } from "../../redux/actions/ProjectsActions";
import NavBar from "../Common/NavBar/NavBar";


const FreeRegistration = () => {
  const [select, setSelect] = useState(null);
  const [jobs, setJobs] = useState([])
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.service.registrationData);

  console.log(registrationData);
  const navigate = useNavigate();
  console.log({ select })

  const onFinish = async (values) => {
    const newValues = { ...values, jobId: select };
    console.log("Received values of form: ", newValues);
    dispatch(addRegistrationData(newValues));
    const isUserExist = await axios.post("https://ancient-gorge-88070.herokuapp.com/auth/emailValidation", newValues);
    console.log(isUserExist?.data);
    if (isUserExist?.data?.needLogin === true) {
      console.log("need login");
      navigate("/login");
    } else {
      console.log("need contract");
      navigate("/register/contract");
    }
  };

  const getCategory = async () => {
    const categories = await axios.get("https://ancient-gorge-88070.herokuapp.com/api/category");
    const newCategory = categories?.data?.data.map((category) => {
      const categoryObj = {};
      categoryObj.id = category._id;
      categoryObj.name = category.subTitle;
      return categoryObj;
    })
    setJobs(newCategory);
  }

  useEffect(() => {
    getCategory();
  }, []);
  console.log(jobs);

  return (
    <div className="container-fluid row free-registration">
      <NavBar />
      <div className="col-md-6 ">
        <div className="ms-5">
          <h1> Trouvez des chantiers près de chez vous</h1>
          <p>
            <ImStatsDots /> 70000 projeets de chantier par mois
          </p>
          <p>
            {" "}
            <TiRadarOutline />
            Trouvez des chantiers ciblés
          </p>
          <p>
            {" "}
            <AiFillLike />0 engagement, 0 commission
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <Form
          name="normal_login"
          className="login-form w-75 mt-5"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/* // */}
          <select
            class="form-select mb-3"
            aria-label="Default select example "
            onChange={(e) => setSelect(e.target.value)}
          >
            {
              jobs.map((job, index) => <option key={job.id} value={job.id} selected={index === 0}>{index === 0 && '🔎'}{job.name}</option>)
            }
          </select>

          {/*  */}
          <Form.Item
            name="postalCode"
            rules={[
              { required: true, message: "Please input your postalcode!" },
            ]}
          >
            <Input
              prefix={<FaMapMarkerAlt style={{ color: "#017acd" }} />}
              placeholder="Votre code postal"
              className="py-2"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<AiTwotoneMail style={{ color: "#017acd" }} />}
              type="email"
              placeholder="Votre email pour recevoir les projets"
              className="py-2"
            />
          </Form.Item>

          <Form.Item>
            <button
              type="primary"
              htmlType="submit"
              className="login-form-button register_button "
            >
              Inscription gratuite
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FreeRegistration;
