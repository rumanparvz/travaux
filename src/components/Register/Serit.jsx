import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRegistrationData } from "../../redux/actions/ProjectsActions";

const Serit = () => {
  const [serit, setSerit] = useState(null)
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.service.registrationData);

  console.log(registrationData);

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ serit: serit });
    dispatch(addRegistrationData({...registrationData, siretNo: parseInt(serit) }));
    const isSiretExist = await axios.post("https://ancient-gorge-88070.herokuapp.com/auth/checkSiret", { siretNo: parseInt(serit) });
    e.preventDefault()
    console.log(isSiretExist?.data);
    if (isSiretExist?.data?.needSiretREgistration === false) {
      navigate("/login");
    } else {
      navigate('/register/results')
    }
  }
  return (
    <section>
      <div className="serit mt-5  " style={{ width: '50%', margin: 'auto' }}>
        <h2>What is your business</h2>
        <p>
          Only building professionals with a valid SIRET can interact with
          owners.
        </p>
        <form action="" className="mt-5" onSubmit={handleSubmit}>
          <p>Name of your company or SIRET</p>
          <input
            className="form-control mb-3 py-3"
            type="text"
            name=""
            id=""
            required
            placeholder="Name or SIRET number (14 digits)"
            onChange={(e) => setSerit(e.target.value)}
          />
          <button className="register_button ">
            Find my Business
          </button>
        </form>
      </div>
    </section>
  );
};

export default Serit;
