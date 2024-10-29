import DashboardContainer from "@/components/Dashboard/DashboardContainer";
import GoogleMapView from "@/views/GoogleMapView";
import React from "react";

const page = () => {
  return (
    <>
      <DashboardContainer fullWidth>
        <GoogleMapView />;
      </DashboardContainer>
    </>
  );
};

export default page;
