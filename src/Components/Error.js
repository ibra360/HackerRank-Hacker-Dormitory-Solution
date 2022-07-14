import React from "react";

function Error({ errorText }) {
  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
      {errorText}
    </div>
  );
}

export default Error;
