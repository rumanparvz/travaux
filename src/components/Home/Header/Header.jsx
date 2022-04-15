import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { serviceData } from "../../../data/ServiceData";
const Header = () => {
  const [data, setData] = useState([]);
  console.log("try", serviceData);
  const [text, setText] = useState("");

  console.log("text", text);
  console.log("resApi", data);

  useEffect(() => {
    if (text !== "") {
      console.log('hi');
      axios
        .get(
          `https://ancient-gorge-88070.herokuapp.com/api/subCategory?search=${text}`
        )
        .then((res) => {
          setData(res.data.data);
        });
    }
  }, [text]);

  // const handleChange = (text) => {
  //   let matches = [];

  //   if (text.length > 0) {
  //     matches = serviceData.filter((title) => {
  //       const regex = new RegExp(`${text}`, "");
  //       return title.name.match(regex);

  //     });
  //   }

  //   setText(text);
  //   setSuggest(matches);
  // };
  const handleChange = (text) => {
    setText(text);
  };

  return (
    <div className="container header_content">
      <div className="row py-5 mt-4">
        <h1>Trouvez un artisan près de chez vous</h1>
        <h1>{text}</h1>
      </div>
      <div className="input_section">
        <h5 className="text-white py-2 " style={{ fontSize: "22px" }}>
          {" "}
          Saisissez votre projet
        </h5>
        <input
          type="text"
          name="project"
          id=""
          className="form-control"
          placeholder="Par exemple:Peinture"
          required
          onBlur={(e) => handleChange(e.target.value)}
        />

        <button className="btn text-white">Trouver un artisan</button>

         {
           (text === null || text !== '') &&         <div className="search_item">
           <p>Quel type de projet cherchez-vous ?</p>
           {data?.slice(0, 10)?.map(({ categoryDescription, _id ,title}) => (
             <div className="input_item " key={_id}>
               <Link to={`/post-service-request/${categoryDescription}`}>
                 <p className="pt-2 ">{title}</p>
               </Link>
             </div>
           ))}
         </div>
         }

        {/* {suggest.length !== 0 && (
          <div className="search_item">
            <p>Quel type de projet cherchez-vous ?</p>
            {suggest?.slice(0, 10)?.map(({name,path,id}) => (
              <div className="input_item " key={id}>
                <Link to={`/post-service-request/${path}`}><p className="pt-2 ">{name}</p></Link>
              </div>
            ))}
        
          </div>
        )} */}

        <h6 className="text-white py-5 my-5 ">
          <Link
            to="/professionnel/inscription/nouvelle"
            className="text-white py-5"
          >
            {" "}
            <BsFillArrowRightCircleFill
              style={{ fontSize: "25px", color: "#e5cb4e" }}
            />{" "}
            S'inscrire en tant que professionnel{" "}
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Header;
