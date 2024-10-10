import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { IdeaProvider } from "./context/IdeaProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IdeaProvider>
      <App />
    </IdeaProvider>
  </StrictMode>
);
