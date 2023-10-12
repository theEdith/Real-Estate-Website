import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-socpkrvdquf6tfcy.us.auth0.com"
      clientId="mIR1nAwwS9eFDxZkPVowPDjIti85OFeG"
      authorizationParams={{
        redirect_uri: "https://real-estate-website-ashen.vercel.app",
      }}
      audience="https://real-estate-website-server.vercel.app"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
