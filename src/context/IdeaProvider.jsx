import { createContext, useState, useContext } from "react";
import { fetchIdea } from "../services/fetchIdea";

const IdeaContext = createContext();

export function useIdea() {
  return useContext(IdeaContext);
}

export function IdeaProvider({ children }) {
  const [idea, setIdea] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  const randomNumber = Math.floor(Math.random() * 11);

  const getIdea = async () => {
    setError(null);
    try {
      const response = await fetchIdea(filter);
      console.log(response);
      setIdea(
        response.activity ? response.activity : response[randomNumber].activity
      );
    } catch (error) {
      setError(`Error al obtener la idea. ${error}`);
      console.error(error.message);
    } 
  };

  const data = {
    idea,
    error,
    filter,
    getIdea,
    setFilter,
    setError,
    setIdea
  };
  return <IdeaContext.Provider value={data}>{children}</IdeaContext.Provider>;
}
