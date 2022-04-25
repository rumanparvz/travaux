import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../Common/Footer/Footer.jsx";
import NavBar from "../../Common/NavBar/NavBar.jsx";

const MyProject = () => {
  const [myProjectData, setMyProjectData] = React.useState([]);

  const getMyProjects = async (userId) => {
    const myProject = await axios.get(`https://ancient-gorge-88070.herokuapp.com/api/myProjects/${userId}`);
    setMyProjectData(myProject.data.data);

  }

  useEffect(() => {
    const userId = Cookies.get("userId");
    if (userId) {
      getMyProjects(userId);
    }

  }, [Cookies.get("userId")]);

  const findData = (data, key) => {
    const natureFind = data?.find(d => d.key === 'Nature');
    const nature = natureFind?.name;
    const conditionFind = data?.find(d => d.key === 'condition');
    const condition = conditionFind?.name;
    const needFind = data?.find(d => d.key === 'Need');
    const need = needFind?.name;
    console.log(nature, condition, need, conditionFind, natureFind, needFind);
    if (key === 'Nature' && natureFind?.name && typeof natureFind?.name === 'string') {
      return nature;
    }
    if (key === 'Condition' && conditionFind?.name && typeof conditionFind?.name === 'string') {
      return condition;
    }
    if (key === 'Need' && needFind?.name && typeof needFind?.name === 'string') {
      return need;
    }
    return '';
  }
  console.log(myProjectData);
  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="my-4">Mes projets</h1>
        {myProjectData.map((project, index) => (
          <Row className="mt-3" key={index}>
            <Card className="p-0">
              <Card.Body className="p-0">
                <div className="px-4">
                  <Row className="mt-3">
                    <Col>
                      <h4>{`${project?.subCategory}: ${findData(project?.additionalInfo, 'Nature')} ${findData(project?.additionalInfo, 'Condition')} ${findData(project?.additionalInfo, 'Need')}`}</h4>
                    </Col>
                    <Col className="text-end">
                      <button className="myProject_btn">voir</button>
                      <button className="myProject_btn mx-3">modifier</button>
                      <button className="myProject_btn">fermer</button>
                    </Col>
                  </Row>
                  <p className="mt-4">Vous n'avez pas encore de réponse</p>
                </div>
                <div className="project_description px-4 py-3">
                  <p className="m-0">
                    <span className="text_blue me-1">Envoyer une demande</span>{" "}
                    à 10 artisans pour obtenir plus de réponses
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default MyProject;
