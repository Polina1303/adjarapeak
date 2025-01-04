import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./footer.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.634657928060186,
  lng: 41.61310892438677,
};

const markerPosition = {
  lat: 41.634657928060186,
  lng: 41.61310892438677,
};

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "ВАШ_API_КЛЮЧ", // Замените на ваш API-ключ
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={markerPosition} />
    </GoogleMap>
  ) : (
    <div>Загрузка карты...</div>
  );
};

export default GoogleMapComponent;
