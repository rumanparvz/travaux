import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addProjectsData, serviceEmail } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";
import axios from "axios";
import Cookies from 'js-cookie';

const EmailInput = () => {
  const { email } = useParams();
  const { stepName, singlePostData, length, preStepName, processStep } = ServiceSteps(email, 'email')
  const [emailText, setEmailText] = useState(null)
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const projectsData = useSelector((state) => state.service.projectsData);

  const handleSubmit = async () => {
    dispatch(serviceEmail({ email: emailText }))
    dispatch(addProjectsData({ ...projectsData, contactEmail: emailText }));
    const isUserExist = await axios.post("https://ancient-gorge-88070.herokuapp.com/auth/emailValidation", { email: emailText });
    if (isUserExist?.data?.needLogin === true && isUserExist?.data?.role === 'client') {
      const userId = Cookies.get('userId');
      if (userId) {
        const res = await axios.post('https://ancient-gorge-88070.herokuapp.com/api/publishProject', { ...projectsData, contactEmail: emailText, userId: userId });
        if (res?.data) {
          dispatch(addProjectsData({}));
          navigate('/');
        }
      } else {
        navigate("/connexion");
      }

    } else if (isUserExist?.data?.needLogin === true && isUserExist?.data?.role !== 'client') {
      setEmailText('')
    }
    else {
      navigate('/fromComment')
    }


  }

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {processStep} sur {length}</h6>
        <ProcessBar processStep={processStep} length={length} />
        <h2 className="py-3">{singlePostData[0].title}</h2>

        <div className="row">
          <p className="text-secondary">
            Vos coordonnées seront visibles uniquement par les artisans que vous
            aurez choisis.
          </p>
          <p>
            E-mail <span className="text-danger">*</span>
          </p>
          <input type="email" name="email" id="email" required className="form-control w-50 ms-2" value={emailText}
            onChange={(e) => setEmailText(e.target.value)} />
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${email}`}
              >
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              {" "}
              <button className="main_button" onClick={handleSubmit}> Suivant</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInput;
