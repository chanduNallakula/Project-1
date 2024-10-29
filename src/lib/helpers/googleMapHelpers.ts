import { useDeckglPolygonModal } from "@/store/googleMapStore";
import { PolygonLayer, ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import * as turf from "@turf/turf";
import { Position } from "@turf/turf";

interface Point {
  id: number;
  coordinates: [number, number];
  color: number[];
}

// const setOpenModal = useDeckglPolygonModal.use.setShow();

export const randomPositionGeneratorRGB = (count: number) => {
  const data = [];
  const colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
  ];

  const colorCount = count / 3;

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    for (let j = 0; j < colorCount; j++) {
      data.push({
        position: [78.4772 + Math.random() * 0.1, 17.4065 + Math.random() * 0.1],
        color: color,
      });
    }
  }

  return data;
};

export function generateRandomCoordinatesInsidePolygon(
  polygonGeofence: Position[],
  count: number
): Point[] {
  const polygon = turf.polygon([polygonGeofence]);

  const bbox = turf.bbox(polygon);

  const points: Point[] = [];

  let i = 0;
  while (points.length < count) {
    const randomX = bbox[0] + Math.random() * (bbox[2] - bbox[0]);
    const randomY = bbox[1] + Math.random() * (bbox[3] - bbox[1]);
    const point = turf.point([randomX, randomY]);

    if (turf.booleanPointInPolygon(point, polygon) && point.geometry !== null) {
      const coordinates = [point.geometry.coordinates[0], point.geometry.coordinates[1]] as [
        number,
        number
      ];
      const color: number[] = [255, 255, 255];
      points.push({ id: i, coordinates, color });
      i++;
    }
  }

  return points;
}

export const getBoundsFromJSON = (viewportData: google.maps.LatLngBoundsLiteral) => {
  const bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(viewportData.south, viewportData.west),
    new google.maps.LatLng(viewportData.north, viewportData.east)
  );
  return bounds;
};

export const filteredPolygonCoordinates = (polygonCoordinates: { lng: number; lat: number }[]) => {
  return polygonCoordinates.map((data) => [data.lng, data.lat]);
};

export const getCenterOfGeofence = (geofence: any) => {
  const points = turf.points(geofence);
  return turf.center(points);
};

export const createPolygonLayer = (
  data: any,
  visibility: string = "",
  openModal?: (id: string) => void
) => {
  // const setOpenModal = useDeckglPolygonModal.use.setShow();
  const filteredData = filteredPolygonCoordinates(data.coordinates);
  const polygonConstants = {
    getFillColor: data.color,
    getLineWidth: 1,
    lineWidthMinPixels: 1,
  };

  return new PolygonLayer({
    id: data.id,
    data: [filteredData],
    getPolygon: (d) => d,
    getFillColor: polygonConstants.getFillColor,
    getLineColor: [0, 0, 0, 200],
    getLineWidth: polygonConstants.getLineWidth,
    lineWidthMinPixels: polygonConstants.lineWidthMinPixels,
    pickable: true,
    visible: true,
    onClick: ({ object, x, y }) => {
      if (object) {
        if (openModal) {
          openModal(data.id);
        }
      }
    },
  });
};

export const createScatterplotLayer = (data: any) => {
  const ScatterplotConstants = {
    getLineWidth: 1,
    getRadius: 1,
    animations_getPosition: {
      type: "interpolation",
      duration: 1400,
      easing: (x: number): number => 1 - (1 - x) * (1 - x),
    },
    animations_getFillColor: {
      type: "interpolation",
      duration: 1400,
      easing: (x: number): number => 1 - Math.sqrt(1 - Math.pow(x, 2)),
    },
  };

  return new ScatterplotLayer({
    id: data.id,
    stroked: true,
    data: data.coordinates,
    getPosition: (d) => d.coordinates,
    getLineWidth: ScatterplotConstants.getLineWidth,
    getFillColor: (d) => d.color,
    getRadius: ScatterplotConstants.getRadius,
    radiusUnits: "pixels",
    lineWidthUnits: "pixels",
    transitions: {
      getPosition: ScatterplotConstants.animations_getPosition,
      getFillColor: ScatterplotConstants.animations_getFillColor,
    },
  });
};

export const createTextLayer = (data: any) => {
  // console.log("datax", data);
  return new TextLayer({
    id: data.id,
    data: data,
    getPosition: (d) => d.center.geometry.coordinates,
    getText: (d) => `${d.text} \n Devices: ${d.inCount ? d.inCount : 0}`,
    getSize: 15,
    sizeUnits: "meters",
    getAngle: 0,
    getTextAnchor: "middle",
    getAlignmentBaseline: "center",
  });
};
