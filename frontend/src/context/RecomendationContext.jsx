import { createContext, useReducer } from "react";

const RecommendedEventContext = createContext();

function RecommendedEventReducer(state, action) {
  switch (action.type) {
    case "SET_RECOMENDATIONS":
      return {
        recomendedEvents: action.payload
      }
    default: return state
  }
}

function RecommendedEventContextProvider({ children }) {
  const [state, dispatch] = useReducer(RecommendedEventReducer, { recomendedEvents: null});

  return <RecommendedEventContext.Provider value={{...state, recomendedEventDispatch: dispatch}}>
    {children}
    </RecommendedEventContext.Provider>;
}

export { RecommendedEventContext, RecommendedEventContextProvider, RecommendedEventReducer };
