import { Form, Input } from "antd";
import React, { useState } from "react";
import { AiFillLike, AiTwotoneMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { TiRadarOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar";

const FreeRegistration = () => {
  const [select, setSelect] = useState(null);

  const navigate = useNavigate();

  const onFinish = (values) => {
    const newValues = { ...values, select: select };
    console.log("Received values of form: ", newValues);
    navigate("/register/contract");
  };

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
            <option selected> 🔎 English</option>
            <option value="bangla">bangla</option>
            <option value="hindi">Hindi</option>
            <option value="arobi">Arobi</option>
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
