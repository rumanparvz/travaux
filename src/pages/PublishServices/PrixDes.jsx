import React from "react";
import NavBar from "../../components/Common/NavBar/NavBar.jsx";
// import dor from "../../assets/images/dor.png";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import fakeData from "../../data/FakeData.js";
import { BiRightArrowAlt } from "react-icons/bi";

const PrixDes = () => {
  const {
    priceDescription,
    category,
    bannerImg,
    title,
    description,
    updateAt,
    readingTime,
    images,
    subCategory,
  } = fakeData;

  console.log(category);

  return (
    <div>
      <NavBar />
      <div>
        <div className="prixDes">
          <img src={bannerImg} alt="" />
        </div>
        <div className="text_image container">
          <div>
            <span>
              <Link className="me-2 prix_text-blue" to="/">
                Accueil
              </Link>
              /
            </span>

            <span>
              <Link className="mx-2 prix_text-blue" to="/">
                Fenêtre et porte
              </Link>
              /
            </span>
            <span className="ms-2">Prix des portes blindées</span>
          </div>
          <h3 className="my-3">{title}</h3>
          <p className="date">{updateAt}</p>
          <div className="mt-5 description_prix row ">
            <div className="col-md-6 col-lg-6">
              <p>{description}</p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="prix_input-body py-4 mt-5">
          <div className="container text-white">
            <p>Trouvez un artisan près de chez vous !</p>
            <p className="m-0">
              Code postal <span className="text-danger">*</span>
            </p>
            <input className="prix_input" type="number" name="" id="" />
            <button className="prix_btn" type="submit">
              Trouver des artisans
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col col-md-6 col-lg-6">
            <h5>Résumé :</h5>
            <p>
              Installation d'une porte blindée classique ou d'un bloc porte,
              nombre de points de la serrure, esthétisme de la porte d'entrée
              blindée déterminent le coût de la menuiserie et de son
              installation (de 600 à plus de 5000 €). Et dans le cadre d'une
              rénovation, le blindage de la porte est une alternative parfois
              moins onéreuse.
            </p>
            <p>
              La <span className="prix_text-bold">porte blindée</span> est dotée
              d'un certain nombre de systèmes de sécurité de façon à retarder,
              voire{" "}
              <span className="prix_text-bold">
                éliminer les risques d'effraction.{" "}
              </span>
              Renforcée, la porte d'entrée devient une
              <span className="prix_text-bold"> porte de sécurité.</span>
            </p>
            <h6 className="prix_text-bold">
              Temps de lecture : {readingTime} Minutes
            </h6>
            <div>
              <a href="#one" rel="noopener noreferrer">
                <p className="m-0">
                  1.{" "}
                  <span className="prix_text-blue">
                    Prix d'une porte blindée classique
                  </span>
                </p>
              </a>
              <a href="#two" rel="noopener noreferrer">
                <p className="m-0">
                  2.{" "}
                  <span className="prix_text-blue">
                    Prix d'un bloc porte blindée
                  </span>
                </p>
              </a>
              <a href="#three">
                <p className="m-0">
                  3.
                  <span className="prix_text-blue">
                    Prix d'un blindage de porte
                  </span>
                </p>
              </a>
              <a href="#four">
                <p className="m-0">
                  4.
                  <span className="prix_text-blue">
                    Pose de la porte blindée par un professionnel
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-4">
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th></th>
                <th>Prix minimum</th>
                <th>Prix moyen</th>
                <th>Prix maximum</th>
              </tr>
            </thead>
            <tbody>
              {priceDescription?.map((pb) => (
                <tr key={pb.id}>
                  <td>{pb?.type}</td>
                  <td>{pb?.minPrice} €</td>
                  <td>{pb?.averagePrice} €</td>
                  <td>{pb?.maxPrice} €</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="mt-2">
            These prices are expressed in Euros, all taxes included (TTC). They
            are taken from price averages of various construction websites.
          </p>
        </div>
        <div className="row mt-5" id="one">
          <div className="col col-md-6 col-lg-6">
            <h5>Le prix d'une porte blindée classique</h5>
            <p>
              L'installation d'une porte blindée classique consiste à{" "}
              <span className="prix_text-bold">
                dégonder l'ancienne porte et à poser la porte d'entrée blindée.
              </span>
            </p>
            <p>
              Cette opération suppose que le dormant, la partie fixe soit en bon
              état et suffisamment solide pour supporter le poids de la
              menuiserie sécurisée. Contrairement aux idées reçues, la porte
              blindée de maison peut être une porte esthétique. En effet, il
              existe des portes blindées en bois, en aluminium avec une
              déclinaison en plusieurs coloris. Le choix doit alors se faire
              dans le respect des contraintes du Plan Local d'Urbanisme (PLU).
              Il peut même s'agit d'une{" "}
              <Link className="prix_text-blue" to="/">
                porte blindée vitrée
              </Link>
              , à condition alors d'opter pour du verre anti-effraction.
            </p>

            <ul>
              <ol>
                Le prix des portes blindées est compris entre 500 et 2200 € TTC.
              </ol>
            </ul>
            <p>
              Une porte blindée pas chère disponible aux environs de 500 € TTC,
              est une porte pleine. Pour les portes plus design, les tarifs
              atteignent rapidement 2000 € TTC, voire plus pour une porte
              blindée sur-mesure ou pour une porte blindée destinée à équiper
              une grande ouverture, comme une porte blindée de garage.
            </p>
            <p>
              Recommandation :{" "}
              <Link className="prix_text-blue" to="/">
                changer la serrure
              </Link>
              permet d'avoir un niveau de sécurité plus homogène. Mais quelles
              que soient les précautions prises, l'encadrement de la porte reste
              le point faible de cette porte sécurisée. C'est pourquoi ces
              travaux sont également souvent accompagnés de la{" "}
              <Link className="prix_text-blue" to="/">
                pose d'une alarme.
              </Link>
            </p>
            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div id="two">
              <h3>Le prix d'un bloc porte blindée</h3>
              <p>
                Un bloc porte blindée est une porte blindée haute sécurité. En
                effet, il s'agit d'un ensemble complet comprenant :
              </p>
              <ul>
                <li>un cadre blindé,</li>
                <li>une porte blindée certifiée BP,</li>
                <li>une serrure de porte blindée A2P.</li>
              </ul>
              <p className="mt-3">
                Ainsi, les certifications de porte blindée sont classées de A2P
                BP1 à A2P BP3. Plus les chiffres de la certification sont
                élevés, plus le bloc est performant et résiste à l'effraction :
              </p>
            </div>
            <ul>
              <li>
                porte blindée A2P BP1, pour une porte résistant aux effractions
                pendant 5 minutes,
              </li>
              <li>
                porte blindée A2P BP2, pour une porte résistant aux effractions
                pendant 10 minutes, un temps suffisant pour décourager la
                plupart des cambrioleurs,
              </li>
              <li>
                porte blindée A2P BP3, pour une porte résistant aux effractions
                pendant au-moins 15 minutes.
              </li>
              <li>
                Selon le niveau de sécurité, le fabricant, les finitions, le
                prix d'un bloc porte blindé va de 1500 à plus de 5000 € voire
                plus pour une porte blindée sur-mesure de grandes dimensions.
              </li>
            </ul>
            <p className="mt-3">
              À ce montant s'ajoutent parfois des frais de petite maçonnerie et
              de réfection du revêtement mural, car la porte blindée de
              dimension standard avec son cadre peut nécessiter des travaux
              d'agrandissement ou au contraire de resserrement de l'ouverture
              existante.
            </p>
            <p>
              Au niveau européen, c'est la norme européenne EN1627 qui
              s'applique, avec un classement allant de 1 à 6. Ainsi, la porte
              blindée classe 6 est conçue pour retarder le cambriolage de 20
              minutes. C'est la porte blindée très haute sécurité recommandée
              pour les commerces. Par ailleurs, quel que soit son classement, il
              faut savoir que le bloc porte blindé va jouer un rôle de porte
              coupe-feu.
            </p>
            <p>
              À noter : certains blocs portes blindées sont conçus pour répondre
              à un besoin spécifique, comme la porte Sitex anti-squat. Cette
              porte blindée 3 points est en acier renforcé de 4 mm d’épaisseur
              sur le pourtour du vantail. De plus, la porte Sitex (du nom de son
              fabricant) est totalement plane, ce qui rend le cisaillement des
              gonds impossible.
            </p>
            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div className="mt-4">
              {images.map((pd) => (
                <span>
                  <img className="map_img" src={pd} alt="" />
                  <p>{subCategory}</p>
                </span>
              ))}
            </div>
            <div id="three">
              <h3>Le prix d'un blindage de porte</h3>
              <p>
                Le blindage consiste à venir renforcer une porte d'entrée
                existante. Cette solution est souvent adoptée dans les
                copropriétés pour une porte d'entrée d'appartement sécurisée,
                lorsque le règlement impose de conserver la porte d'origine.
                C'est également un choix fait par les propriétaires de maison
                souhaitant garder des menuiseries extérieures traditionnelles.
              </p>
              <p>
                Le blindage est donc un choix esthétique, mais cela peut
                également être un choix économique :
              </p>
              <ul>
                <li>
                  Le coût d'un blindage est en général compris entre 850 et 2500
                  €.
                </li>
              </ul>
              <p>
                Deux techniques sont utilisées pour sécuriser une porte d'entrée
                existante :
              </p>
              <ul>
                <li>Le blindage de porte à plat</li>
                <li>Le blindage de porte-fourreau.</li>
              </ul>
              <p className="mt-3">
                Le blindage de porte à plat s'effectue en posant, à l'intérieur
                et sur toute la surface, une tôle de blindage. Découpée
                sur-mesure, la tôle de blindage colle ainsi aux dimensions de la
                porte.Des finitions adaptées à l'esthétisme de l'habitat sont
                proposées, entre le décor bois, la peinture et un traitement
                électro-zingué pour éviter la corrosion de l'acier.
              </p>
              <p>
                Le blindage fourreau, encore plus efficace, est en revanche plus
                onéreux. En effet, il s'agit de placer l'ensemble de la porte
                dans un fourreau métallique. La qualité du métal utilisée
                influence alors sur le niveau de sécurité obtenu.
              </p>
              <p>
                Quelle que soit la technique de blindage utilisée, cette
                opération s'accompagne de la pose d'une nouvelle serrure
                carénée, c'est-à-dire posée en applique. La porte blindée 5
                points est alors la norme, c'est-à-dire équipée d'une serrure 5
                pênes. De plus, des paumelles plus solides viennent remplacer
                les gonds traditionnels, car le blindage alourdit la menuiserie.
              </p>
              <p>
                À noter : renforcer une porte d'entrée permet d'avoir une porte
                sécurisée, mais également une porte avec une meilleure isolation
                phonique et thermique.
              </p>
            </div>
            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div className="mt-5" id="four">
              <h3>Prix de la pose de la porte blindée par un professionnel</h3>
              <p>
                L'installation d'une porte blindée simple, d'un bloc porte
                blindé ou le blindage d'une porte existante sont des opérations
                techniques. Elles doivent être réalisées dans le respect des
                normes, pour jouer pleinement leur rôle de dissuasion des
                cambriolages.
              </p>
              <p>
                De plus, les portes blindées sont lourdes et difficiles à
                manipuler. Confier ces travaux à un pro est nécessaire.
              </p>
              <p>
                Le prix de la main d'œuvre pour la pose de votre porte blindée
                dépend largement des tarifs du serrurier ou du menuisier
                contracté, mais aussi des difficultés du chantier (reprise ou
                non de la maçonnerie ou de la menuiserie, etc.). Ces "à-côtés"
                sont difficiles à chiffrer au préalable. On estime toutefois les
                frais suivants :
              </p>
              <ul>
                <li>
                  Le prix de pose de porte blindée s'élève généralement entre
                  400 et 800 € TTC.
                </li>
              </ul>
              <p>
                Faire appel à un professionnel permet parfois de bénéficier d'un
                taux de TVA plus favorable. En effet, s'il s'agit d'une
                installation de porte blindée de maison ou de porte blindée
                d'appartement achevé depuis plus de 2 ans, le menuisier va
                facturer une TVA à 10%, y compris sur le coût des menuiseries
                qu'il fournit.
              </p>
              <p>
                En revanche, si vous achetez vous-même la porte blindée, la TVA
                normale au taux de 20% s'applique. Il en est de même en cas
                d'installation d'une telle porte dans le neuf ou dans un local
                destiné à un usage autre que l'habitation.
              </p>
            </div>
            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div className="mt-5">
              <h3>
                Les prix des porte d'entrée / blindage porte chantiers récemment
                complétés
              </h3>
              <p>
                Afin de vous aider à vous projeter avec votre projet, nous vous
                avons compilé des chantiers récemment réalisés et les prix
                correspondant.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="prix_input-body  py-4">
        <div className="container text-white">
          <p className="m-0">
            Code postal <span className="text-danger">*</span>
          </p>
          <input className="prix_input" type="number" name="" id="" />
          <button className="prix_btn" type="submit">
            Trouver des artisans
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrixDes;
