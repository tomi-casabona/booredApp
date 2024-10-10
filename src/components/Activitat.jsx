import { useIdea } from "../context/IdeaProvider";

export const Activitat = () => {
  const { idea, error } = useIdea();

  return (
    <div className="md:border-l-2 md:border-dotted md:mx-0 md:border-black md:h-full md:flex md:items-center md:justify-center">
      <div className="w-1/2 h-1/3 mx-auto text-center mt-4 md:px-auto md:flex md:flex-col md:items-center md:justify-center">
        <h2 className="text-xl">Activitat:</h2>
        <p className={`mt-4 ${error ? 'text-red-500' : 'text-green-600'}`}>
          {idea ? idea : error ? error : "troba generar una idea"}
        </p>
      </div>
    </div>
  );
};
