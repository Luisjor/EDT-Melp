import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

// 28.49236803999953, -106.91044081952663
// 28.502438122874477, -106.91254367131775
const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const markers = [
    {
      id: 1,
      position: { lat: 28.49236803999953, lng: -106.91044081952663 }
    },
    {
      id: 2,
      position: { lat: 28.59236803999953, lng: -106.81044081952663 }
    }
  ];
  
  const center = {
    lat: 28.49236803999953,
    lng: -106.91044081952663
  };

  const othercenter = {
    lat: 28.59236803999953,
    lng: -106.81044081952663
  };

  
  
  function MyComponent() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyC5QRQPWJyh8jLPz7NRS0Dyr5EUASRiO0E"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >

        {markers.map(point => {
          return(
            <MarkerF
            key={point.id}
            position={point.position}
            />
          )
        })}
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
  
  export default React.memo(MyComponent)