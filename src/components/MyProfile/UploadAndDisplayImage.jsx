import React, { useState } from "react";
import {ImCancelCircle} from "react-icons/im"
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="uploadImage-inline d-flex">
      <div className="uploadImage-inline">
        {selectedImage && (
          <div className="uploadImage-inline imageCancel">
            <img
              alt="not fount"
              width={"90px"}
              height={"90px"}
              className="me-2 rounded-1"
              src={URL.createObjectURL(selectedImage)}
            />
            <ImCancelCircle
              className="imageCancel_icon"
              onClick={() => setSelectedImage(null)}
            ></ImCancelCircle>
            {/* 
          <button onClick={() => setSelectedImage(null)}>Remove</button> */}
          </div>
        )}
      </div>
      <form className="uploadImage-inline" action="">
        <label for="image" className="uploadImageMyProfile">
          <input
            type="file"
            name=""
            id="image"
            onChange={(event) => {
              // console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
            style={{ height: "1px", width: "1px" }}
          />
        </label>
      </form>
    </div>
  );
};

export default UploadAndDisplayImage;
