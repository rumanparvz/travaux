import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BiLike } from "react-icons/bi";
import { FaRegEdit, FaUserFriends } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const RootTitlePost = () => {

  const { postText } = useParams();

  const {stepNumbers,singlePostData,length}=ServiceSteps(postText,'text')
  const [postCode, setPostCode] = useState(7520);
  //get service codeInput
  // const postData = serviceData.filter((sd) => sd.path === postText);
  // const singlePostData = postData[0].steps.filter( (post) => post.type === "text");

  // const routeNumber =postData[0].steps.slice(1,2)[0].routeNumber
console.log(length);
  const data = [
    { Icon: FaRegEdit,  title: "Publiez votre projet gratuitement et sans engagement",},
    { Icon: FaUserFriends, title: "42 200 artisans qualifiés" },
    { Icon: BiLike, title: "Plus de 74 000 notes et avis" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="postTitle">
      <NavBar />
      <div className="container ">
        <h6 className="pt-2">Étape {stepNumbers-1} sur {length}</h6>
        <p className="content"></p>
        <h1 style={{ fontWidth: "900" }}>{singlePostData[0].title}</h1>
        <div className="input_postal mt-5 pt-5">
          <h6 className="pb-2 ">Code postal du lieu des travaux</h6>
          <form action="" className="post-form pb-5" onSubmit={handleSubmit}>
            <input
            className="form-control w-50 "
              type="text"
              name="post"
              id=""
              required
              defaultValue={postCode}
            />
            <span className="paris">Paris 20</span>
            <Link
              to={`/post-service-request/${stepNumbers}/${postText}`}
            >
              {" "}
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
