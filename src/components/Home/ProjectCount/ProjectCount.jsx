import React from "react";

const ProjectCount = () => {
  const styles = {
    backgroundColor: "#3f27ba",
    padding: "13px 8%",
    fontWidth: "700",
    borderRadius: "30px",
    marginTop:'37px',
    margin:'auto',
    ':hover':{
        backgroundColor:"red"
    }
  };
  const counts = [
    { count: "42 696", title: "professionnels" },
    { count: "1 355 595", title: "projets" },
    { count: "73 674", title: "avis" },
  ];
  return (
    <div className="count_item py-5 " style={{backgroundColor:'#f9f8f6',zIndex:-1}}>
      <div className="container">
        <div className="row">
          {counts.map(({ count, title }) => (
            <div className="col-md-4 text-center mb-4" key={count}>
              <h1 style={{ color: "#3f27ba", fontWeight: "700" }}>{count}</h1>
              <h2 className="text-primary">{title}</h2>
            </div>
          ))}
          <div className="" style={{textAlign:'center'}}>
            <button className="btn btn-success main_button_color" style={styles}>
              Publiez votre projet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCount;
