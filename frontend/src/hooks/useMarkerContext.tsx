import React, { useContext } from "react";
import MarkerContext from "../contexts/marker-context";

const useMarkerContext = () =>{
    const markerContext = useContext(MarkerContext);

    return markerContext;
};

export { useMarkerContext };