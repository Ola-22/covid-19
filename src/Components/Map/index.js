// import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet/dist/leaflet";

function Maps() {
  return (
    <div>
      <LeafletMap
        style={{ height: "500px", width: "100%" }}
        zoom={13}
        center={[10, 10]}
      ></LeafletMap>
    </div>
  );
}

export default Maps;
