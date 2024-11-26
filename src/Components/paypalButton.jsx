import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PayPalButton = () => {
  const navigate = useNavigate();

  const id = localStorage.getItem("id");
  const hasAccessed = localStorage.getItem("hasAccessedPayPalButton");


  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAHjx_xvcmjORgoFLEPaKW03s6pUiIRFDMspQINFpjfe081P2-j18uWeLAb8RusfVjssKJi2dhyManvj0&components=hosted-buttons&disable-funding=venmo&currency=USD";
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .HostedButtons({
            hostedButtonId: "Y88H3GLYEMY98",
          })
          .render("#paypal-container-Y88H3GLYEMY98"); 
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="paypal-container-Y88H3GLYEMY98"></div>;
};

export default PayPalButton;
