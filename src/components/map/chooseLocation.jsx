'use client'
import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

export default function ChooseLocation() {
  const containerStyle = {
    width: '100%',
    height: '200px'
  }

  const center = {
    lat: 51.51034515875458,
    lng: -0.10225261254588762
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  })

  const options = {
    mapId: '',
    mapTypeControl: false, //Change terrain view
    zoomControl: false, //remove zoom control
    fullscreenControl: false, //remove fullscreen button
    clickableIcons: false, //no popup on clicking places
    streetViewControl: false, //remove street view button
    defaultCursor: 'pointer'
  }

  // const [map, setMap] = useState(null)
  const [clickedLatLng, setClickedLatLng] = useState({ lat: 51.508089130126955, lng: - 0.08770064578947726 });

  const handleMapClick = (event) => {
    setClickedLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    alert(JSON.stringify(clickedLatLng))
  };

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [center])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={options}
      onClick={handleMapClick}
      cursor='pointer'
    // onLoad={onLoad}
    // onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      {clickedLatLng && (
        <MarkerF position={clickedLatLng} />
      )}
      {/* <MarkerF position={{ lat: 51.51034515875458, lng: -0.10225261254588762 }} /> */}
      <></>
    </GoogleMap>
  ) : <></>
}
