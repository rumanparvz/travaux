import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Modifier = () => {
    return (
      <div>
        <div>
          <div className="">
            <h6>Nom</h6>
            <div>
              <label htmlFor="">
                Prénom<span className="text-danger">*</span>
              </label>
              <br />
              <input
                className="modifier_input w-50 "
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <label htmlFor="">
                Nom<span className="text-danger">*</span>
              </label>
              <br />
              <input
                className="modifier_input w-50"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div>
            <h6>Adresse</h6>
            <div>
              <label htmlFor="">
                Adresse<span className="text-danger">*</span>
              </label>
              <br />
              <input
                className="modifier_input w-50 "
                type="text"
                name=""
                placeholder="PARIS 01"
                id=""
              />
            </div>

            <div>
              <label htmlFor="">
                Code postal<span className="text-danger">*</span>
              </label>
              <br />
              {/* <div className="modifier_input-postal w-50">
                <input
                  className=" modifier_input-code1 w-50 "
                  type="text"
                  name=""
                  placeholder="75001 Paris 01"
                  id=""
                />
                <input
                  className=" modifier_input-code2 w-50"
                  type="text"
                  name=""
                  placeholder="75001 Paris 01"
                  id=""
                />
              </div> */}
              <InputGroup className="mb-3 w-50">
                
                <FormControl aria-label="First name" />
                <FormControl aria-label="Last name" />
              </InputGroup>
            </div>
          </div>
        </div>
        <div>
          <button className="modifier_btn me-3">Annuler</button>
          <button className="modifier_btn">Enregistrer</button>
        </div>
      </div>
    );
};

export default Modifier;