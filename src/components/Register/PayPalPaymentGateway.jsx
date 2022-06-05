import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRegistrationData } from "../../redux/actions/ProjectsActions";
import axios from "axios";
import Cookies from "js-cookie";


const PayPalPaymentGateway = () => {
  const [state, setState] = useState(0)
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.service.registrationData);

  const navigate = useNavigate()

  console.log(registrationData);

  const handleSubmit = async () => {
    dispatch(addRegistrationData({ ...registrationData, paymentInfo: 123456789 }));
    try {
      const response = await axios.post("https://ancient-gorge-88070.herokuapp.com/auth/signup", registrationData);
      if (response) {
        navigate("/");
        Cookies.set("refreshToken", response?.data?.data?.refreshToken);
        Cookies.set("accessToken", response?.data?.data?.accessToken);
        Cookies.set("userId", response?.data?.data?.user?.userId);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container w-50 m-auto mt-5 pt-5">
      <h1>Configurez votre paiement pour plus tard</h1>
      <h4 className="text-primary">Configurez votre paiement pour plus tard</h4>
      <div className="items">
        <p>
          <span className="text-primary" style={{ fontSize: "20px" }}>
            <AiOutlineCheck />
          </span>{" "}
          Le prix du contact est affiché sur chaque projet de chantier.
        </p>
        <p>
          {" "}
          <span className="text-primary" style={{ fontSize: "20px" }}>
            <AiOutlineCheck />
          </span>{" "}
          Vous ne payez la mise en relation que lorsque le particulier partage
          ses coordonnées.
        </p>
        <h3>Choisissez votre mode de paiement</h3>
      </div>
      <div className="paymentIntrigation">
        <input value={state} type="number" onChange={(e) => setState(e.target.value)} />
        <PayPalButton
          amount="0.01"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });
          }}
          options={{
            clientId: "AVvisEJyoSAXEor_D2fYzWYDrx9ekGkKKY-4-uslf7bNovsGEDWTxcZgrX1IGqB9T5CpQpzE-5mMfGb1",
            currency: 'USD',
          }}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button onClick={handleSubmit} className="btn btn-primary mt-2 w-25 ms-0"> Register </button>
      </div>
    </div>
  );
};

export default PayPalPaymentGateway;
