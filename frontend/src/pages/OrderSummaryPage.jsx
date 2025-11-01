import React from "react";
import "../styles/OrderSummaryPage.css";
import { useNavigate } from "react-router-dom";

const OrderSummaryPage = () => {
    const navigate = useNavigate();

  // Sample data
  const planDetails = {
      planName: "Premium Plan",
      price: 49,
      billingCycle: "Monthly",
      tax: 5,
      discount: 0,
    };

    const total = planDetails.price + planDetails.tax - planDetails.discount;
    
    return (
        <div className="order-container">
      {/* Left Section - Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-card">
          <div className="summary-row">
            <span>Plan Name:</span>
            <span>{planDetails.planName}</span>
          </div>
          <div className="summary-row">
            <span>Billing Cycle:</span>
            <span>{planDetails.billingCycle}</span>
          </div>
          <div className="summary-row">
            <span>Plan Price:</span>
            <span>${planDetails.price}</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>${planDetails.tax}</span>
          </div>
          <div className="summary-row">
            <span>Discount:</span>
            <span>-${planDetails.discount}</span>
          </div>
          <div className="summary-total">
            <span>Total Payable:</span>
            <span>${total}</span>
          </div>
        </div>
        <button className="change-plan-btn">← Change Plan</button>
      </div>

      {/* Right Section - User Info */}
      <div className="order-details">
        <h2>Confirm Details</h2>
        <div className="form-group">
          <label>Email for Invoice</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label>Company Name (Optional)</label>
          <input type="text" placeholder="Your company name" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree to the Terms & Conditions and Refund Policy.
          </label>
        </div>
        <button onClick={() => navigate("/payment")}>Proceed to Payment →</button>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
