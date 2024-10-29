import React, { Suspense } from "react";
import { getAudinceset } from "@/apis/audienceset";
import Audience from "@/components/Dashboard/AudienceSets/Audience";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";

const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["audiencesets"],
    queryFn: getAudinceset,
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
        <Audience />
      </HydrationBoundary>
    </Suspense>
  );
};

export default page;
