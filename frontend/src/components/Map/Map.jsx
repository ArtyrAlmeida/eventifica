import React, { useEffect, useState} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { getEventInfo } from '../../api/getEvent'
import { addEvent } from '../../api/addEvent';
import { Modal } from '../Modal/Modal';
import { useEventContext } from '../../hooks/useEventContext';

const containerStyle = {
  width: '70vw',
  height: '100vh'
};

const center = {
  lat: -6.889913, 
  lng: -38.544690
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)
  const [currentPoint, setCurrentPoint] = useState();
  const [isModalActive, setIsModalActive] = useState(false);
  const { events, dispatch } = useEventContext();

  useEffect(()=> {
    getEventInfo().then((points) => {
      dispatch({type:"SET_EVENT", payload: points})
    });
  }, [dispatch,map]);

  const handleClick = (e) => {
    const pointData = {
      position: {
        type: 'Point',
        coordinates: [e.latLng.lat(),e.latLng.lng(),]
      }
    };

    setCurrentPoint(pointData)
    setIsModalActive(true)
  }

  const handleFormSubmission = async (formData) => {
    const eventMarker = {
      ...formData,
      ...currentPoint,
    }

    const response = await addEvent(eventMarker);
    dispatch({type: "CREATE_EVENT", payload: response})
  }

  const setInnactivaModal = () => {
    setIsModalActive(false);
  }

  return isLoaded ? (
      <div className='mapPos'>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onClick={handleClick}
          >
            { events && events.map(marker => {
              return (
                <Marker key={Math.random()} position={{lat: marker.position.coordinates[0], lng: marker.position.coordinates[1]}}
                  title={marker.name}/>
              )
            }
            ) }
            <></>
          </GoogleMap>
          {isModalActive && <Modal onSendFormData={handleFormSubmission} onFormCancel={setInnactivaModal}/>}
      </div>
  ) : <></>
}

export default React.memo(Map)