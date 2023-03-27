/* eslint-disable react/prop-types */
import React from "react";

function Button({ buttonText, reqType, setReqType }) {
  return (
    <button
      className={
        buttonText === reqType
          ? "border-b-2 border-brown  font-['Poppins] font-semibold"
          : " border-transparent  font-['Poppins] font-semibold"
      }
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
}

export default Button;
