"use client";
import { polygonOptions } from "@/lib/constants/googleMapDataV2";
import { useGoogleMapDrawingOverlays, useGoogleMapStore } from "@/store/googleMapStore";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import React, { useEffect } from "react";

export interface GoogleMapDrawingProps {
  savedOverlays?: any[];
  setSavedOverlays?: React.Dispatch<React.SetStateAction<any[]>>;
}
export type OverlayGeometry =
  | google.maps.Marker
  | google.maps.Polygon
  | google.maps.Polyline
  | google.maps.Rectangle
  | google.maps.Circle;

export interface Snapshot {
  radius?: number;
  center?: google.maps.LatLngLiteral;
  position?: google.maps.LatLngLiteral;
  path?: Array<google.maps.LatLng>;
  bounds?: google.maps.LatLngBoundsLiteral;
}

export function DrawingManager({ savedOverlays, setSavedOverlays }: GoogleMapDrawingProps) {
  const map = useMap();
  const drawing = useMapsLibrary("drawing");
  const [newDrawingManager, setNewDrawingManager] =
    React.useState<google.maps.drawing.DrawingManager | null>(null);
  const setDrawingManager = useGoogleMapStore.use.setDrawingManager();

  const overlays = useGoogleMapDrawingOverlays.use.overlays();
  const setOverlays = useGoogleMapDrawingOverlays.use.setOverlays();

  const setAddGeofencePolygonData = useGoogleMapDrawingOverlays.use.setAddGeofencePolygonData();

  useEffect(() => {
    if (!map || !drawing) return;
    const newDrawingManager = new drawing.DrawingManager({
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.RECTANGLE,
        ],
      },
      polygonOptions: {
        strokeColor: "#1e1e1e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        editable: true,
        draggable: true,
      },
    });

    setNewDrawingManager(newDrawingManager);
    setDrawingManager(newDrawingManager);

    return () => {
      newDrawingManager.setMap(null);
    };
  }, [drawing, map, setDrawingManager, setNewDrawingManager]);

  useEffect(() => {
    const updatePolygonData = function (e: any) {
      google.maps.event.addListener(e, "set_at", () => {
        console.log("set_at");
        console.log("ppppp");
        if (e.type === google.maps.drawing.OverlayType.POLYGON) {
          const polygon = e.overlay;
          const path = polygon.getPath();
          const polygonData = path.getArray().map((latLng: any) => ({
            lat: latLng.lat(),
            lng: latLng.lng(),
          }));
          console.log("polygonData", [...polygonData, polygonData[0]]);
          if (map) {
            const mapZoom = map!?.getZoom();
            const mapBounds = map!?.getBounds()!?.toJSON();
            console.log("mapZoom", mapZoom);
            console.log("mapBounds", mapBounds);
            setAddGeofencePolygonData({
              overlay: [...polygonData, polygonData[0]],
              properties: { mapZoom: mapZoom || 14, mapBounds },
              polygon: e,
            });
          } else {
            setAddGeofencePolygonData({
              polygon: e,
              overlay: [...polygonData, polygonData[0]],
              properties: {
                mapZoom: 0,
                mapBounds: { east: 0, north: 0, south: 0, west: 0 },
              },
            });
          }
          console.log("xxxxxxxxxxxxxxxxxx", polygonData);
        }
      });
      google.maps.event.addListener(e, "insert_at", () => {
        console.log("insert_at");
        console.log("ppppp");
        if (e.type === google.maps.drawing.OverlayType.POLYGON) {
          const polygon = e.overlay;
          const path = polygon.getPath();
          const polygonData = path.getArray().map((latLng: any) => ({
            lat: latLng.lat(),
            lng: latLng.lng(),
          }));
          console.log("polygonData", [...polygonData, polygonData[0]]);
          if (map) {
            const mapZoom = map!?.getZoom();
            const mapBounds = map!?.getBounds()!?.toJSON();
            console.log("mapZoom", mapZoom);
            console.log("mapBounds", mapBounds);
            setAddGeofencePolygonData({
              overlay: [...polygonData, polygonData[0]],
              properties: { mapZoom: mapZoom || 14, mapBounds },
              polygon: e,
            });
          } else {
            setAddGeofencePolygonData({
              polygon: e,
              overlay: [...polygonData, polygonData[0]],
              properties: {
                mapZoom: 0,
                mapBounds: { east: 0, north: 0, south: 0, west: 0 },
              },
            });
          }
          console.log("xxxxxxxxxxxxxxxxxx", polygonData);
        }
      });
      google.maps.event.addListener(e, "dragstart", () => {
        console.log("dragstart");
        console.log("ppppp");
        if (e.type === google.maps.drawing.OverlayType.POLYGON) {
          const polygon = e.overlay;
          const path = polygon.getPath();
          const polygonData = path.getArray().map((latLng: any) => ({
            lat: latLng.lat(),
            lng: latLng.lng(),
          }));
          console.log("polygonData", [...polygonData, polygonData[0]]);
          if (map) {
            const mapZoom = map!?.getZoom();
            const mapBounds = map!?.getBounds()!?.toJSON();
            console.log("mapZoom", mapZoom);
            console.log("mapBounds", mapBounds);
            setAddGeofencePolygonData({
              overlay: [...polygonData, polygonData[0]],
              properties: { mapZoom: mapZoom || 14, mapBounds },
              polygon: e,
            });
          } else {
            setAddGeofencePolygonData({
              polygon: e,
              overlay: [...polygonData, polygonData[0]],
              properties: {
                mapZoom: 0,
                mapBounds: { east: 0, north: 0, south: 0, west: 0 },
              },
            });
          }
          console.log("xxxxxxxxxxxxxxxxxx", polygonData);
        }
      });
      google.maps.event.addListener(e, "drag", () => {
        console.log("drag");
        console.log("ppppp");
        if (e.type === google.maps.drawing.OverlayType.POLYGON) {
          const polygon = e.overlay;
          const path = polygon.getPath();
          const polygonData = path.getArray().map((latLng: any) => ({
            lat: latLng.lat(),
            lng: latLng.lng(),
          }));
          console.log("polygonData", [...polygonData, polygonData[0]]);
          if (map) {
            const mapZoom = map!?.getZoom();
            const mapBounds = map!?.getBounds()!?.toJSON();
            console.log("mapZoom", mapZoom);
            console.log("mapBounds", mapBounds);
            setAddGeofencePolygonData({
              overlay: [...polygonData, polygonData[0]],
              properties: { mapZoom: mapZoom || 14, mapBounds },
              polygon: e,
            });
          } else {
            setAddGeofencePolygonData({
              polygon: e,
              overlay: [...polygonData, polygonData[0]],
              properties: {
                mapZoom: 0,
                mapBounds: { east: 0, north: 0, south: 0, west: 0 },
              },
            });
          }
          console.log("xxxxxxxxxxxxxxxxxx", polygonData);
        }
      });
      google.maps.event.addListener(e, "dragend", () => {
        console.log("dragend");
        console.log("ppppp");
        if (e.type === google.maps.drawing.OverlayType.POLYGON) {
          const polygon = e.overlay;
          const path = polygon.getPath();
          const polygonData = path.getArray().map((latLng: any) => ({
            lat: latLng.lat(),
            lng: latLng.lng(),
          }));
          console.log("polygonData", [...polygonData, polygonData[0]]);
          if (map) {
            const mapZoom = map!?.getZoom();
            const mapBounds = map!?.getBounds()!?.toJSON();
            console.log("mapZoom", mapZoom);
            console.log("mapBounds", mapBounds);
            setAddGeofencePolygonData({
              overlay: [...polygonData, polygonData[0]],
              properties: { mapZoom: mapZoom || 14, mapBounds },
              polygon: e,
            });
          } else {
            setAddGeofencePolygonData({
              polygon: e,
              overlay: [...polygonData, polygonData[0]],
              properties: {
                mapZoom: 0,
                mapBounds: { east: 0, north: 0, south: 0, west: 0 },
              },
            });
          }
          console.log("xxxxxxxxxxxxxxxxxx", polygonData);
        }
      });
      // setOverlays(e);
      setAddGeofencePolygonData({
        polygon: e,
        overlay: null,
        properties: {
          mapZoom: 0,
          mapBounds: { east: 0, north: 0, south: 0, west: 0 },
        },
      });
      // console.log(Object.getPrototypeOf(e.overlay));
      // // or
      // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(e.overlay)));
      // console.dir(e.overlay);

      if (e.type === google.maps.drawing.OverlayType.POLYGON) {
        const polygon = e.overlay;
        const path = polygon.getPath();
        const polygonData = path.getArray().map((latLng: any) => ({
          lat: latLng.lat(),
          lng: latLng.lng(),
        }));
        console.log("polygonData", [...polygonData, polygonData[0]]);
        if (map) {
          const mapZoom = map!?.getZoom();
          const mapBounds = map!?.getBounds()!?.toJSON();
          console.log("mapZoom", mapZoom);
          console.log("mapBounds", mapBounds);
          setAddGeofencePolygonData({
            overlay: [...polygonData, polygonData[0]],
            properties: { mapZoom: mapZoom || 14, mapBounds },
            polygon: e,
          });
        } else {
          setAddGeofencePolygonData({
            polygon: e,
            overlay: [...polygonData, polygonData[0]],
            properties: {
              mapZoom: 0,
              mapBounds: { east: 0, north: 0, south: 0, west: 0 },
            },
          });
        }
        console.log("xxxxxxxxxxxxxxxxxx", polygonData);
      }
      // console.log(`${e.overlay.getPosition().lng()},${e.overlay.getPosition().lat()}`);
      newDrawingManager?.setDrawingMode(null);
      // google.maps.event.addListener(e.overlay, "click", function () {});
    };

    if (!newDrawingManager) return;
    google.maps.event.addListener(newDrawingManager, "overlaycomplete", updatePolygonData);
    google.maps.event.addListener(newDrawingManager, "", updatePolygonData);

    return () => {
      google.maps.event.clearListeners(newDrawingManager, "overlaycomplete");
    };
  }, [map, overlays, newDrawingManager, setAddGeofencePolygonData, setOverlays]);

  newDrawingManager?.setMap(map);

  return null;
}

export default DrawingManager;

export function isPolygon(overlay: OverlayGeometry): overlay is google.maps.Polygon {
  return (overlay as google.maps.Polygon).getPath !== undefined;
}

export function isPolyline(overlay: OverlayGeometry): overlay is google.maps.Polyline {
  return (overlay as google.maps.Polyline).getPath !== undefined;
}
