import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const CraftsmenJobs = () => {
  const craftsmenJobs = [
    {
      id: 1,
      title: "Fenêtre et porte",
      icon: "https://www.travaux.com/static/svg-icons/windows-doors.svg",
      jobLinks: [
        { link: "Toutes les informations sur fenêtre et porte" },
        { link: "Vitrier - miroitier" },
      ],
      path:'/plomberie'
    },
    {
      id: 2,
      title: "Couverture-Toiture",
      icon: "https://www.travaux.com/static/svg-icons/roofing.svg",
      jobLinks: [
        { link: "Toutes les informations sur couverture-toiture" },
        { link: "Couvreurs - charpentiers" },
      ],
      path:'/couverture-toiture'
    },
    {
      id: 3,
      title: "Peinture",
      icon: "https://www.travaux.com/static/svg-icons/painting.svg",
      jobLinks: [
        { link: "Toutes les informations sur peinture" },
        { link: "Peintres" },
      ],
      path:'/peinture'
    },
    {
        id: 4,
        title: "Construction, rénovation, maisonFenêtre et porte",
        icon: "https://www.travaux.com/static/svg-icons/home-constructions-renovations.svg",
        jobLinks: [
          { link: "Toutes les informations sur construction, rénovation, maison" },
          { link: "Architectes" },
          { link: "Décorateurs - architectes d'intérieur" },
          { link: "Façadiers" },
          { link: "Ferronniers - métalliers - zingueurs" },
          { link: "Maçons" },
          { link: "Professionnels second œuvre" },
          { link: "Professionnels tout corps d'etat" },
        ],
        path:'/construction-renovation-maison'
      },
      {
        id: 5,
        title: "Ebenisterie",
        icon: "https://www.travaux.com/static/svg-icons/roofing.svg",
        jobLinks: [
          { link: "Toutes les informations sur ebenisterie" },
          { link: "Ebénistes" },
          { link: "Menuisiers" },
        ],
        path:'/ebenisterie'
      },
      {
        id: 6,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/electricite'
      },
      {
        id: 7,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 8,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 9,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 10,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 11,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 12,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 13,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 14,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
      {
        id: 15,
        title: "Electricité",
        icon: "https://www.travaux.com/static/svg-icons/electricity.svg",
        jobLinks: [
          { link: "Toutes les informations sur electricité" },
          { link: "Électriciens" },
        ],
        path:'/'
      },
  ];
  return (
    <div
      style={{ backgroundColor: "#f9f8f6" }}
      className="_carftsmen_bob py-5 "
    >
      <div className="container">
        <h1 className="py-5">Trouvez des artisans pour tous les travaux</h1>
        <div className="row">
          <div className="job_section">
            <div className="section_header row">
              {craftsmenJobs.map(({ title, icon,jobLinks,path ,id}) => (
                <div className="d-flex justify-content-center  col-md-4 gap-3 " key={id}>
                  <div className="icon" >
                    <img
                      src={icon}
                      alt=""
                      className="img-fluid mt-3 "
                      style={{ width: "30px" }}
                    />
                  </div>
                  <div className="header">
                    <h5 className="py-4">{title}</h5>
                    {
                        jobLinks.map(({link},i)=> (
                            <p className="linkTab" key={i} ><Link to={path}  className="text-primary"><AiOutlineArrowRight /> {link}</Link></p>

                        ))
                    }
              
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftsmenJobs;
