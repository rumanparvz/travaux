import { Checkbox } from "antd";
import React from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRegistrationData } from "../../redux/actions/ProjectsActions";

const OfferServices = () => {
  const checkboxData = [
    {
      id: 1,
      label: 'Cleanning',
    },
    {
      id: 2,
      label: 'plumbing',
    },
    {
      id: 3,
      label: 'flooring',
    },
    {
      id: 4,
      label: 'electrical',
    },
    {
      id: 5,
      label: 'carpentry',
    }
  ]

  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.service.registrationData);
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
    dispatch(addRegistrationData({ ...registrationData, services: checkedValues }));
  }

  const plainOptions = ["Apple", "Pear", "Orange"];

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/register/googleMap");
  };
  return (
    <div className="container mt-5">
      <div className="w-75 m-auto ">
        <p style={{ background: "#e4f4ff", padding: "18px" }}>
          You will receive projects corresponding to the selected activities.
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Electrician </Accordion.Header>
            <Accordion.Body>
              <Checkbox.Group
                options={checkboxData.map((item) => item.label)}
                defaultValue={[checkboxData[0].label]}
                onChange={onChange}
              />
              <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do you offer other services?</Accordion.Header>
            <Accordion.Body>
              <Checkbox.Group
                options={plainOptions}
                defaultValue={["Apple"]}
                onChange={onChange}
              />
              <br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <button className="register_button  w-25 mt-4" onClick={handleSubmit}>
          To Continue
        </button>
      </div>
    </div>
  );
};

export default OfferServices;