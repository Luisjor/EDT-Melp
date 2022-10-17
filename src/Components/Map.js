import React from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// 28.49236803999953, -106.91044081952663
// 28.502438122874477, -106.91254367131775
const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 28.49236803999953,
    lng: -106.91254367131775
  };
  
  function MyComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyC5QRQPWJyh8jLPz7NRS0Dyr5EUASRiO0E"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ 

          }
          <></>
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(MyComponent)