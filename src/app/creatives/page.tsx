import React, { Suspense } from "react";
import Creatives from "@/components/Dashboard/Creative/Creative";
import DashboardContainer from "@/components/Dashboard/DashboardContainer";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getAllCreatives } from "@/apis/creatives";
import { CircularProgress } from "@mui/material";

const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["creatives"],
    queryFn: getAllCreatives,
  });
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-start min-h-screen">
          <CircularProgress />
        </div>
      }
    >
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div>
          <DashboardContainer>
            <Creatives />
          </DashboardContainer>
        </div>
      </HydrationBoundary>
    </Suspense>
  );
};

export default page;
