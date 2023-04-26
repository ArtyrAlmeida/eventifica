import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import mapStyle from './Map.module.scss';
import { getEventInfo } from '../../api/getEvent';

const containerStyle = {
  width: '600px',
  height: '100vh'
};

const center = {
  lat: -6.88778,
  lng: -38.55700
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  });

  const [map, setMap]: any = React.useState(null);
  const [markerPos, setMarkerPos]: any = useState([]);

  useEffect(() => {
    getEventInfo();
  }, []);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const handleClick = (e: any) => {
    setMarkerPos(
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      }
    );
  };

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className={mapStyle.mapPos}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleClick}
      >
        {}
        <></>
      </GoogleMap>
    </div>
  ) : <></>;
}

export default React.memo(Map);