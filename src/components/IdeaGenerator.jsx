import pet from "../assets/images/personaje.png";
import { useIdea } from "../context/IdeaProvider";
import "../index.css"; // Asegúrate de que el CSS esté importado

export const IdeaGenerator = () => {
  const { getIdea, setIdea, setError } = useIdea();
  const handleClick = () => {
    setIdea(null);
    setError(null);
    getIdea();
  };
  return (
    <div>
      <div className="img-container z-20 w-1/2 h-1/3 md:w-1/3 mx-auto text-center mt-4">
        <img className="mx-auto" src={pet} alt="app's avatar" />
      </div>
      <div
        id="a"
        className="trapezoid text-center py-8 my-4 border rounded-sm mx-auto"
      >
        <p>TROBA ALGUNA</p>
        <p>COSA A FER</p>
        <button
          className="p-2 m-4 text-md md:py-3 md:px-8 text-lg border rounded-xl  active:scale-110 active:bg-green-700 active:text-slate-100
                  transition-transform duration-500 text-slate-50 bg-black"
          onClick={handleClick}
        >
          Generar
        </button>
      </div>
    </div>
  );
};
