import React, { useEffect, useState, useContext } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import mapStyle from './Map.module.scss';
import { getEventInfo } from '../../api/getEvent';
import { EventInterface } from '../../interfaces';
import { CreationModal } from '../Ui/CreationModal/CreationModal';
import MarkerContext from '../../contexts/marker-context';
import { addEvent } from '../../api/addEvent';
import { useMarkerContext } from '../../hooks/useMarkerContext';

const containerStyle = {
  width: '70vw',
  height: '100vh'
};

const center = {
  lat: -6.88778,
  lng: -38.55700
};

function Map() {

  const markerCtx = useContext(MarkerContext);

  const numberOfMarkers = markerCtx.markers.length;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  });

  const [map, setMap]: any = React.useState(null);
  const [markers, setMarkers]: any = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [currentPoint, setCurrentPoint]:any = useState();

  useEffect(() => {
    getEventInfo().then((points) => {
      setMarkers(points)
      console.log('points: ', points);
    });
  }, [map]);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const handleClick = (e: any) => {
    const pointData = {
      position: {
        type: 'Point',
        coordinates: [e.latLng.lat(),e.latLng.lng(),]
      }
    };
    setActiveModal(true);
    setCurrentPoint(pointData);
  };

  const handleFormSubmission = async (formData:any) => {
    const eventMarker = {
      ...formData,
      ...currentPoint,
    }

    const response = await addEvent(eventMarker);
    setMarkers((previousMarkers:any) => {
      return [...previousMarkers,eventMarker]
    });
    console.log(response);
  }

  const setInnactiveModal = () => {
    setActiveModal(false)
  }

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
        {(markers as Array<EventInterface>).map((marker) => {
          return (
            <Marker
              key={Math.random()}
              position={
                new window.google.maps.LatLng(marker.position.coordinates[0],
                  marker.position.coordinates[1])
              }
              title={marker.name}
            />
          );
        })}
        <></>
      </GoogleMap>
      {activeModal && <CreationModal onSendFormData={handleFormSubmission} onFormCancel={setInnactiveModal}/>}
    </div>
  ) : <></>;
}

export default React.memo(Map);