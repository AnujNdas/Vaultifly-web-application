import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const { state } = useLocation();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Payment Successful!</h1>
      <p>Your {state?.plan?.name} plan has been activated.</p>
    </div>
  );
};

export default SuccessPage;
