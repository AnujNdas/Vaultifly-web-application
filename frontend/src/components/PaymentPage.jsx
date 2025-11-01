import React from "react";
import "../styles/PaymentPage.css";

const PaymentPage = ({ selectedPlan = "Platinum", price = "$29/month" }) => {
  return (
    <div className={`payment-page ${"light-mode"}`}>
      {/* Left Side - Plan Summary */}
      <div className="plan-summary">
        <h2>Your Plan</h2>
        <div className="summary-card">
          <h3>{selectedPlan} Plan</h3>
          <p className="price">{price}</p>
          <ul>
            <li>✅ Advanced Dashboard</li>
            <li>✅ Priority Email Support</li>
            <li>✅ Access to All Tools</li>
          </ul>
          <button className="change-plan-btn">Change Plan</button>
        </div>
      </div>

      {/* Right Side - Payment Form */}
      <div className="payment-form">
        <h2>Payment Details</h2>
        <form>
          <label>
            Cardholder Name
            <input type="text" placeholder="John Doe" />
          </label>

          <label>
            Card Number
            <input type="text" maxLength="16" placeholder="1234 5678 9012 3456" />
          </label>

          <div className="card-row">
            <label>
              Expiry Date
              <input type="text" placeholder="MM/YY" maxLength="5" />
            </label>
            <label>
              CVV
              <input type="password" placeholder="•••" maxLength="4" />
            </label>
          </div>

          <label>
            Email for Invoice
            <input type="email" placeholder="you@example.com" />
          </label>

          <button className="pay-btn">Proceed to Payment</button>

          <p className="secure-text">🔒 Secured by SSL & Trusted Gateway</p>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
