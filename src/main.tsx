import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "@/store/store";

const redirect = new URLSearchParams(window.location.search).get("redirect");

if (redirect) {
  const base = "/CS-Portfolio";
  const cleanPath = redirect.startsWith(base)
    ? redirect.replace(base, "")
    : redirect;

  window.history.replaceState(null, "", cleanPath);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/CS-Portfolio">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
