import React from "react";
import { EventInterface } from "../interfaces";

const MarkerContext = React.createContext({
    markers:[],
    totalAmount: 0,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addMarker: (marker:EventInterface) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getMarker: function() {}
})

export default MarkerContext;