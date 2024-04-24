import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QuestionProvider } from "./content/questionContext";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <QuestionProvider>
          <App />
        </QuestionProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
