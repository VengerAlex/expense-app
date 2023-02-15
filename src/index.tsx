import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { MainProvider } from "./providers/MainProvider";

const ROOT_ELEMENT = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

ROOT_ELEMENT.render(
  <MainProvider>
    <App />
  </MainProvider>,
);
