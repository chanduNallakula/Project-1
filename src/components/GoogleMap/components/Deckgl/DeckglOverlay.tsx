import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { useEffect, useMemo, useState } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { PolygonLayer } from "@deck.gl/layers";
import { filteredPolygonCoordinates } from "@/lib/helpers/googleMapHelpers";

interface DeckGLOverlayProps {
  layers: any[];
}

function DeckGLOverlay({ layers }: DeckGLOverlayProps) {
  const map = useMap();

  const overlay = useMemo(
    () =>
      new GoogleMapsOverlay({
        interleaved: false,
      }),
    []
  );

  useEffect(() => {
    if (!map) return;
    overlay.setMap(map);
    return () => overlay.setMap(null);
  }, [map, overlay]);

  overlay.setProps({ layers });
  return null;
}

export default DeckGLOverlay;
