import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="44725281685-d6n9s66lum1g3sn1mttm1ddhvb9e19tb.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
