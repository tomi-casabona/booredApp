import { Activitat } from "./components/Activitat";
import { FilterGroup } from "./components/FilterGroup";
import { IdeaGenerator } from "./components/IdeaGenerator";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <>
      <main className="bg-slate-50 w-full h-lvh p-4 min-w-[300px] text-black font-bold">
            <NavBar />
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Sección izquierda con NavBar, FilterGroup y IdeaGenerator */}
          <div className="w-full md:w-1/2">
            <FilterGroup />
            <IdeaGenerator />
          </div>

          {/* Sección derecha con Activitat */}
          <div className="w-full md:w-1/2 md:pl-4">
            <Activitat />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
