import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

export default function DriverMap() {
  const containerStyle = {
    width: '100%',
    height: '70vh'
  };

  const center = {
    lat: 51.51034515875458,
    lng: -0.10225261254588762
  };

  const [directions, setDirections] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.log('Directions request failed due to ' + response.status);
      }
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
    >
      <DirectionsService
        options={{
          destination: { lat: 51.508089130126955, lng: -0.08770064578947726 }, // Point B
          origin: center, // Point A
          travelMode: 'DRIVING'
        }}
        callback={directionsCallback}
      />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  ) : null;
}
