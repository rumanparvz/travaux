import React, { useState } from "react";
import { Link } from "react-router-dom";
import { serviceData } from "../../../../data/ServiceData";
const SearchItem = () => {
  console.log("try", serviceData);

  const [text, setText] = useState("");
  const [suggest, setSuggest] = useState([]);

  console.log("h", suggest.slice(0, 10));

  const handleChange = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = serviceData.filter((title) => {
        const regex = new RegExp(`${text}`, "");
        return title.name.match(regex);
      });
    }

    setText(text);
    setSuggest(matches);
  };

  return (
    <div className="container header_content searchItem" >
      <div className="input_section">
        <h6 className="p-2">Quel est votre projet ?</h6>
        <input
          type="text"
          name="project"
          id=""
          className="form-control "
          placeholder="Par exemple:Peinture"
          required
          onChange={(e) => handleChange(e.target.value)}
          style={{width:'90%',border:'2px solid #3f27ba'}}
        />

        <button className="btn text-white">Trouver un artisan</button>

        {suggest.length !== 0 && (
          <div className="details_search_item">
            <p>Quel type de projet cherchez-vous ?</p>
            {suggest?.slice(0, 10)?.map(({ name, path, id }) => (
              <div className="input_items " key={id}>
                <Link to={`/post-service-request/${path}`}>
                  <p className="pt-2 ">{name}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
