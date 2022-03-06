import React from "react";

const Craftsman = () => {
  const craftsman = [
    {
      id: 1,
      title: "Publiez votre projet",
      description:
        "Décrivez votre projet en quelques clics et sélectionnez vous-même les artisans avec qui vous souhaitez être mis en relation.",
    },
    {
      id: 2,
      title: "Les artisans vous répondent",
      description: "Les artisans intéressés vous contactent par email",
    },
    {
      id: 3,
      title: "Choisissez les artisans",
      description:
        "Consultez les profils des artisans et sélectionnez ceux que vous souhaitez rencontrer.",
    },
  ];
  return (
    <div className="container py-5 my-5" >
      <h2 className=" ms-2 py-2" style={{frontWidth:'700',zIndex:-1}}>Comment trouver le bon artisan ?</h2>
      <div className="craftsman_section row">
        {craftsman.map((cr) => (
          <div className="col-md-4 p-4" key={cr.id}>
            <div className="craftsman_container d-flex justify-content-center  gap-3">
              <div className="number">
                <h1 style={{color:'#e5cb4e'}}>{cr.id}</h1>
              </div>
              <div className="content " style={{zIndex:-1}}>
                <h4>{cr.title}</h4>
                <p>{cr.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Craftsman;
