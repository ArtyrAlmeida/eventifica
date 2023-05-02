import React, { useReducer } from 'react';
import MarkerContext from './marker-context';

const defaultState = {
    markers: [],
    totalAmount: 0
};

const markerReducer = (state: any, action: any) => {
        if(action.type === 'ADD_MARKER' ) {
            const updatedMarkers = state.markers.concat(action.marker);
            const updatedAmount = state.totalAmount + 1;
            return({
                markers: updatedMarkers,
                totalAmount: updatedAmount
            });
        }
        if(action.type === 'SET_MARKERS') {
            return action.markers;
        }
    return defaultState;
    
};

const MarkerProvider = (props: any) => {

    const [markerState, dispatchMarker] = useReducer(markerReducer, defaultState)
    const addMarkerHandler = (marker: any) => {
        dispatchMarker({
            type: 'ADD_MARKER',
            marker: marker
        })
    };

    const getMarkerHandler = () => {
        dispatchMarker({
            type: 'GET_MARKER',
        })
    }

    const markerContext = {
        markers: markerState.markers,
        totalAmount: markerState.totalAmount,
        addMarker: addMarkerHandler,
        getMarkers: getMarkerHandler
    }

    return <MarkerContext.Provider value={{...markerState,dispatchMarker}}>{props.children}</MarkerContext.Provider>
}

export { MarkerProvider }