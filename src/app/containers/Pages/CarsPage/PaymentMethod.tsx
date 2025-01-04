import React from "react";
import masterCard from "../../../../assets/images/master-card.jpg";
import paypal from "../../../../assets/images/paypal.jpg";
import "./style.css";

const PaymentMethod: React.FC = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="bankTransfer" className="d-flex align-items-center gap-2">
          <input type="radio" id="bankTransfer" name="paymentMethod" />
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="chequePayment" className="d-flex align-items-center gap-2">
          <input type="radio" id="chequePayment" name="paymentMethod" />
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="masterCard" className="d-flex align-items-center gap-2">
          <input type="radio" id="masterCard" name="paymentMethod" />
          Master Card
        </label>
        <img src={masterCard} alt="MasterCard" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="paypal" className="d-flex align-items-center gap-2">
          <input type="radio" id="paypal" name="paymentMethod" />
          Paypal
        </label>
        <img src={paypal} alt="Paypal" />
      </div>

      <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
