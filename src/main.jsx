import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Bootstrap first, so our own stylesheets win when specificity is equal.
import "bootstrap/dist/css/bootstrap.min.css";

// Self-hosted fonts: Newsreader (Latin serif), Noto Serif Bengali (Bengali serif), Hind Siliguri (UI sans).
import "@fontsource-variable/newsreader/index.css";
import "@fontsource-variable/noto-serif-bengali/index.css";
import "@fontsource/hind-siliguri/400.css";
import "@fontsource/hind-siliguri/500.css";
import "@fontsource/hind-siliguri/600.css";
import "@fontsource/hind-siliguri/700.css";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/lessons.css";
import "./styles/article.css";
import "./styles/auth.css";

import { Route } from "./component/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>
);
