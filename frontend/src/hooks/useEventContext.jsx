import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function useEventContext() {
  const context = useContext(EventContext);
  
  if (!context) {
    throw Error("The Event context should have a Provider");
  }

  return context;
}

export { useEventContext };
