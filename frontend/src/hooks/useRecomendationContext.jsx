import { RecommendedEventContext } from "../context/RecomendationContext"
import { useContext } from "react";

function useRecomendedEventContext() {
  const context = useContext(RecommendedEventContext);
  
  if (!context) {
    throw Error("The Event context should have a Provider");
  }

  return context;
}

export { useRecomendedEventContext };
