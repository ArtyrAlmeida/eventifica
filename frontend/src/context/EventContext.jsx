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
            events: state.events.filter((exp) => exp._id !== action.payload._id)
        };
    default: return state
  }
}

function EventContextProvider({ children }) {
  const [state, dispatch] = useReducer(EventReducer, { events: null });
  console.log("State: ",state)

  return <EventContext.Provider value={{...state,dispatch}}>
    {children}
    </EventContext.Provider>;
}

export { EventContext, EventContextProvider, EventReducer };
