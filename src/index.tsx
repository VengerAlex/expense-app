import ReactDOM from "react-dom/client";
import { MainProvider } from "./providers/MainProvider";
import "./index.css";
import App from "./App";

const ROOT_ELEMENT = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

ROOT_ELEMENT.render(
  <MainProvider>
    <App />
  </MainProvider>,
);
