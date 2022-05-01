import React from 'react';


const Modifier = () => {
    return (
      <div>
        <div>
          <div>
            <h6>Nom</h6>
            <div className="mt-3">
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
            <div className="mt-3">
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
            <h6 className="mt-4">Adresse</h6>
            <div className="mt-3">
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

            <div className="mt-3">
              <label htmlFor="">
                Code postal<span className="text-danger">*</span>
              </label>
              <br />
              <div className="modifier_input-postal w-50">
                <input
                  className=" modifier_input-code w-50 "
                  type="text"
                  name=""
                  placeholder="75001 Paris 01"
                  id=""
                />
                <span>Paris 01</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="modifier_btn me-3">Annuler</button>
          <button className="modifier_btn">Enregistrer</button>
        </div>
      </div>
    );
};

export default Modifier;