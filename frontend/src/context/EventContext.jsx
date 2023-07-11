import { createContext, useReducer } from "react";

const EventContext = createContext();

function EventReducer(state, action) {
  switch (action.type) {
    case "SET_EVENT":
      return {
        events: action.payload,
      };
    case "CREATE_EVENT":
      return {
        events: [action.payload, ...state.events],
      };
    case "DELETE_EVENT":
      return {
        events: state.events.filter((event) => event._id !== action.payload)
      };
    default: return state
  }
}

function EventContextProvider({ children }) {
  const [state, dispatch] = useReducer(EventReducer, { events: null, recomendedEvents: null});

  return <EventContext.Provider value={{...state,dispatch}}>
    {children}
    </EventContext.Provider>;
}

export { EventContext, EventContextProvider, EventReducer };
