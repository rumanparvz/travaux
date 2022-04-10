import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
const GoogleMapLocation = () => {
const [cordinate,setCordinate]=useState({lat:0,lan:0})
const [bounds,setBounds]=useState({})
console.log(bounds);

const cordinates = {lat: 48.8566,
lng: 2.3522}
  return (
    <div className="container w-75 m-auto pt-5 mt-5">
      <h1 style={{ fontWeight: "revert" }}>
        Quelle est votre zone d'intervention ?
      </h1>
      <p>
        Définissez votre distance maximale autour de{" "}
        <span className="text-primary">Paris 01</span>
      </p>
      <div className="googleMap">
        <div style={{ height: "400px", width: "56%",margin:'auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAIfcdgDZl1TsFy4rfkA5cO0sll5xqhATI",
            }}
            defaultCenter={cordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            center={cordinates}
            options={''}
            onChange={(e)=>{
                console.log(e);
                setCordinate({lat:e.center.lat,lng:e.center.lng})
                setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
            }}
            onClick={''}
          ></GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapLocation;

// AIzaSyAIfcdgDZl1TsFy4rfkA5cO0sll5xqhATI

// AIzaSyAIfcdgDZl1TsFy4rfkA5cO0sll5xqhATI
