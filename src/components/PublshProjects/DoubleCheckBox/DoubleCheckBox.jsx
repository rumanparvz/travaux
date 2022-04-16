import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProjectsData, serviceDoubleCheckBox } from '../../../redux/actions/ProjectsActions';
import ProcessBar from '../../../utils/ProcessBar';
import ServiceSteps from '../../../utils/ServiceSteps';
import NavBar from '../../Common/NavBar/NavBar';

const DoubleCheckBox = () => {
    const { doubleCheckBox } = useParams();

    const { stepName, singlePostData, length, preStepName ,processStep} = ServiceSteps( doubleCheckBox, "doubleCheckBox");
    const dispatch = useDispatch();
    const projectsData = useSelector((state) => state.service.projectsData);
  
    const handleCheckBoxChange = (svg, name, key) => {
      dispatch(serviceDoubleCheckBox({  svg, natureType: name }));
      dispatch(addProjectsData({...projectsData, additionalInfo:[...projectsData?.additionalInfo, {key, name}] }));
    };
    return (
        <div className="checkBoxOption">
        <NavBar />
        <div className="container">
          <h6 className="pt-2">
            Étape {processStep} sur {length}
          </h6>
          <ProcessBar processStep={processStep} length={length} />
          <h5 className="pt-4">{singlePostData[0].title}</h5>
          <div className="check_Box row mb-5">
            {singlePostData[0].options.map(({ svg, name, id, key }) => (
              <div className="col-md-4 col-sm-6  pt-3 mb-5" key={id}>
                <Card className="pt-4 ">
                  <label
                    for={id}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCheckBoxChange(svg, name, singlePostData[0]?.keyword)}
                  >
                    
                    <input
                      type="radio"
                      id={id}
                      style={{ position: "absolute", left: "92%", top: "7%" }}
                      value={name}
                      name="check"
                    />
  
                    <div className="text-center">
                      <Card.Img
                        variant="top"
                        src={svg}
                        style={{ width: "90px",height:'70px' }}
                        className="text-center"
                      />
                    </div>
                    <Card.Body>
                      <p className="text-center">{name}</p>
                    </Card.Body>
                  </label>
                </Card>
              </div>
            ))}
            <div className="checkBox_button d-flex justify-content-between align-items-center">
              <div>
                <Link
                
                to={`/post-service-request/${doubleCheckBox}`}
                
                >
                  <button className="secondary_button">Précédent</button>{" "}
                </Link>
              </div>
              <div>
                <Link to={`/post-service-request/${stepName}/${doubleCheckBox}`}>
                  <button className="main_button"> Suivant</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DoubleCheckBox;