import React from "react";
import GoogleMapAPIProvider from "./components/GoogleMapAPIProvider";
import GoogleMap from "./components/GoogleMap";

const GoogleMapWrapper = () => {
  return (
    <GoogleMapAPIProvider>
      <GoogleMap />
    </GoogleMapAPIProvider>
  );
};

export default GoogleMapWrapper;
