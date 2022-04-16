import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BiLike } from "react-icons/bi";
import { FaRegEdit, FaUserFriends } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addProjectsData, ProjectPostalCode } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const RootTitlePost = () => {
  const { postText } = useParams();
  const { postData,processStep,length} = ServiceSteps(postText, null);

  console.log('helloWorld',postData[0].title);
  const [postCode, setPostCode] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
//  console.log(processStep,length);
 
  const data = [
    {  Icon: FaRegEdit,  title: "Publiez votre projet gratuitement et sans engagement",},
    { Icon: FaUserFriends, title: "42 200 artisans qualifiés" },
    { Icon: BiLike, title: "Plus de 74 000 notes et avis" },
  ];

  const navigate = useNavigate();
  const projectsData = useSelector((state) => state.service.projectsData);
  const handleSubmit = (e) => {
    if (postCode.length < 5) {
      setError("Le code postal n'est pas valide");
    } else {
      dispatch(ProjectPostalCode({ postalCode: postCode }));
      // navigate(`/post-service-request/${stepName}/${postText}`);
    
    }
    e.preventDefault();
  };

  return (
    <div className="postTitle">
      <NavBar />
      <div className="container ">
        <h6 className="pt-2">
          Étape {processStep | 1} sur {length}
        </h6>
        <ProcessBar processStep={processStep} length={length} />
        <p className="content"></p>
        <h1 style={{ fontWidth: "900" }}>{postData[0].title}</h1> 
        <div className="input_postal mt-5 pt-5">
          <h6 className="pb-2 ">Code postal du lieu des travaux</h6>
          <form action="" className="post-form pb-5" onSubmit={handleSubmit}>
            <input
              className="form-control w-50 "
              type="text"
              name="post"
              id=""
              required
              onChange={e => {setPostCode(e.target.value); dispatch(addProjectsData({ postalCode: e.target.value, categoryId: postData[0].categoryId, category: postData[0].category, subCategoryId: postData[0]?._id, subCategory: postData[0].title }))}}
            />
            {/* <span className="paris">Paris 20</span> */}
            {/* <Link to={`/post-service-request/${stepName}/${postText}`}> */}
            <Link to={`/post-service-request/checkbox/${postText}`}>

            <p style={{ color: "red", paddingTop: "5px" }}>{error}</p>
            <button className="main_button" as={Link} to="/s">
              Suivant
            </button>
            </Link>
          </form>
        </div>
        <div className="row py-5">
          {data.map(({ Icon, title }) => (
            <div className="col-md-4 " key={title}>
              <Card className="p-4 rounded" style={{ height: "180px" }}>
                <Icon
                  style={{ fontSize: "40px", color: "#330691" }}
                  className="ms-3"
                />
                <Card.Body>
                  <h5>{title}</h5>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RootTitlePost;
