import { Suspense } from "react";
import { getAllMyCampaigns } from "@/apis/campaigns";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import CampaignsPage from "@/components/Dashboard/CampainCards/CampaignsPage";
import { CircularProgress } from "@mui/material";

const CampaignsPageRoute = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["campaigns"],
    queryFn: getAllMyCampaigns,
  });

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-start min-h-screen">
          <CircularProgress style={{ color: "white" }} />

        </div>
      }
    >
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CampaignsPage />
      </HydrationBoundary>
    </Suspense>
  );
};

export default CampaignsPageRoute;
