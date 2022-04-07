import React from "react";
import { Table } from "react-bootstrap";
import useAsync from "../../../hooks/useAsync.js";
import { category } from "../../../services/ServiceCategory/ServiceCategory.js";
const MangeServices = () => {
  const { data } = useAsync(category.getAllCategory);

  console.log(data);
  const handleDelete = (e, id) => {
    category.deleteService(id).then((res) => {
      e.target.parentNode.parentNode.style.display = "none";
    });
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ title, image, _id }, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <img
                  src={image}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />{" "}
                {title}
              </td>
              <td>
                {" "}
                <button
                  className="btn-danger px-3 py-2 rounded"
                  onClick={(e) => handleDelete(e, _id)}
                >
                  Delete
                </button>{" "}
                <button className="btn-success px-3 py-2 rounded">Edit</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MangeServices;
