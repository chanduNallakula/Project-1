"use client";
import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";

interface GoogleMapAPIProviderProps {
  children?: React.ReactNode;
}

const GoogleMapAPIProvider = ({ children }: GoogleMapAPIProviderProps) => {
  return (
    <APIProvider
      libraries={["drawing", "places"]}
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      {children}
    </APIProvider>
  );
};

export default GoogleMapAPIProvider;
