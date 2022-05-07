import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Sommes = () => {
  const data = [
    {
      id: 1,
      title: "À propos",
      content:
        "Travaux.com est le site internet leader de la mise en relation entre particuliers et professionnels de l’habitat. Nous sommes aujourd’hui plus de 220 collaborateurs animés par le même objectif: offrir aux particuliers et aux artisans le moyen le plus fiable et le plus simple pour identifier, préparer et réaliser tous les projets de travaux.  ",
    },
    {
      id: 2,
      title: "Culture",
      content:
        "Nous sommes une entreprise dynamique et en croissance où la confiance et la coopération sont la base de notre collaboration. Nous nous concentrons sur le bien-être de nos équipes grâce à un environnement de travail agréable (espaces de relaxation, salle de sport, massages, tournois de pétanque, participation à des activités caritatives, etc.) Nous rejoindre.  ",
    },
    {
      id: 3,
      title: "Histoire   ",
      content:
        "Travaux.com a été fondée en 2006. En 2008, nous sommes devenus membre de HomeAdvisor, le leader mondial sur le marché américain. Outre Travaux.com, HomeAdvisor a également des membres leader en Angleterre (Mybuilder.com), aux Pays-Bas (Werkspot.nl), en Italie (Instapro.it) et en Allemagne (My-Hammer.de). HomeAdvisor fait partie d'IAC, connu pour de nombreuses sociétés Internet à succès telles que Match.com, Lexa.nl, Tripadvisor, Vimeo, et Tinder.",
    },
    {
      id: 4,
      title: "L’égalité salariale entre femmes et hommes chez Travaux.com   ",
      content:
        "Sous la forme d'une note sur 100, l'index d’égalité entre les femmes et les hommes se compose de 4 grands critères qui évaluent les inégalités entre les femmes et les hommes dans les entreprises.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "projets",
      number: 1478479,
    },
    {
      id: 2,
      title: "projets",
      number: 1478479,
    },
    {
      id: 3,
      title: "projets",
      number: 1478479,
    },
  ];

  return (
    <section>
      <div className="sommes">
        <div className="nav_bar">
          <Navbar expand="lg" style={{ background: "#0389ce" }}>
            <Container>
              <Navbar.Brand href="#home">
                {" "}
                <img
                  className="img-fluid w-50"
                  src="https://www.travaux.com/assets/fr_FR/images/logo.svg?v=187"
                  alt=""
                />{" "}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-white somes">
                  <Nav.Link href="#home" className="nav_item">
                    S'inscrire en tant que professionnel
                  </Nav.Link>
                  <Nav.Link href="#link" className="nav_item">
                    {" "}
                    Connexion
                  </Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="nav_bottom">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <a href="#">Accueil</a>
                </li>
                <li>
                  <a href="#">Publier un projet gratuitement</a>
                </li>
                <li>
                  <a href="#">Comment ça marche</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom_image_url">
          <div className="container">
            <div className="row">
              <h1 className="text-white" style={{ fontSize: "50px" }}>
                Qui sommes-nous ?
              </h1>
            </div>
          </div>
        </div>
        <div className="middle_content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {data.map(({ id, title, content }) => (
                  <div key={id}>
                    <h5 className="mt-4">{title}</h5>
                    <p>{content}</p>
                  </div>
                ))}
              </div>
              <div className="col-md-6 project_number ">
                {projects.map(({ title, number }) => (
                  <div
                    style={{ border: "1px solid #ddd" }}
                    className="mt-2 p-4 rounded text-center"
                  >
                    <h1>{number}</h1>
                    <h3 className="text-secondary">{title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_top py-5" style={{ background: "#f6f8f8" }}>
          <div className="container d-flex align-items-center gap-5">
            <button className="btn-success px-5 py-2 rounded">
              Publiez votre projet
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              facere!
            </p>
          </div>
        </div>
        <div className="down container pt-3">
          <div className="row">
            <div className="col-md-4">
              <h6>À propos de Travaux.com</h6>
              <p className="text-secondary">
                <a href="/">Qui sommes-nous ?</a>{" "}
              </p>
              <p className="text-secondary">
                <a href="/">Nous rejoindre </a>{" "}
              </p>
              <p className="text-secondary">
                <a href="/">Devenir affilié </a>{" "}
              </p>
              <p className="text-secondary">
                <a href="/">Presse et médias </a>{" "}
              </p>
              <p className="text-secondary">
                <a href="/">Charte qualité </a>{" "}
              </p>
              <p className="text-secondary">
                <a href="/">Nos partenaires </a>{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h6>Aide</h6>
              <p>
                <a href="#">Besoin d'aide</a>
              </p>
            </div>
            <div className="col-md-4">
              <h6>Suivez-nous:</h6>
              <p>
                {" "}
                <a href="#">
                  {" "}
                  <AiFillFacebook /> Facebook
                </a>
              </p>
              <p>
                {" "}
                <a href="#">
                  {" "}
                  <FaTwitter /> Twitter
                </a>
              </p>
              <p>
                <a href="#">
                  {" "}
                  <FiInstagram /> YouTube
                </a>
              </p>
            </div>
            <div
              className="forrter py-5 mb-3"
              style={{
                borderBottom: "1px solid #ddd",
                borderTop: "1px solid #ddd",
              }}
            >
              <h5>Vous êtes un professionnel ?</h5>
              <p>
                Travaux.com vous aide à trouver de nouveaux projets.
                Inscrivez-vous »
              </p>
            </div>
          </div>
        </div>
        <div className="main_footer" style={{ background: "#0b535f" }}>
          <div className="footer_blue container py-3 ">
            <ul>
              <li>
                <a className="text-white" href="#">
                  Métiers
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Activités
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Conditions générales
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Copyright© Travaux.com - 2022
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sommes;
