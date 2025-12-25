"use client";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  Tooltip,
} from "react-leaflet";
import "./CommunityMap.css";
import L from "leaflet";
// import jaipurBoundary from "../data/Jaipur_Wards.geojson"; - This line will be removed

// Fix for default marker icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const position: [number, number] = [26.8856, 75.7606]; // Approx. coords for 118 Narendra Nagar
const jaipurPosition: [number, number] = [26.9124, 75.7873]; // Jaipur center

const geoJsonStyle = {
  fillColor: "pink",
  color: "#ff78a0",
  weight: 1,
  opacity: 0.2,
  fillOpacity: 0.3,
};

interface CommunityMapProps {
  backgroundColor?: string;
}

const CommunityMap: React.FC<CommunityMapProps> = ({
  backgroundColor = "#f3f4f6",
}) => {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await fetch("/Jaipur_Wards.geojson");
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchGeoJson();
  }, []);

  return (
    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: backgroundColor, zIndex: 0 }}
      ></div>
      <MapContainer
        center={jaipurPosition}
        zoom={10}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
          zIndex: 1,
          backgroundColor: "transparent",
        }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {geoJsonData && <GeoJSON data={geoJsonData} style={geoJsonStyle} />}
        <Marker position={position}>
          <Tooltip
            permanent
            direction="left"
            offset={[-30, 0]}
            opacity={1}
            className="custom-tooltip"
          >
            Kothari Sanstha
          </Tooltip>
          <Popup>
            BKK Trust <br /> 118 Narendra Nagar, Sodala, Jaipur
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CommunityMap;
