import React from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: require("./location.svg").default,
  iconSize: new L.Point(40, 47),
});

function App() {
  return (
    <div>
      <MapContainer
        style={{ height: "900px" }}
        center={[-6.914864, 107.608238]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          url='http://vectormap.pptik.id/styles/klokantech-basic/{z}/{x}/{y}.png'
        />
        <Marker
            icon={customIcon}
            position={[-6.914864, 107.608238]}
          ></Marker>
        <MarkerClusterGroup chunkedLoading>
          <Marker
            icon={customIcon}
            position={[-6.89467, 107.56061]}
          ></Marker>
          <Marker
            icon={customIcon}
            position={[-6.889518333333333, 107.560835]}
          ></Marker>
          <Marker
            icon={customIcon}
            position={[-6.894081111111111, 107.564185]}
          ></Marker>
          <Marker
            icon={customIcon}
            position={[-6.893904444444445, 107.56571333333333]}
          ></Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
