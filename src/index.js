import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const content = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDom.render(content, document.querySelector("#root"));

// To connect serve we most install axios with below command and use it to server connection <--comment
// npm i axios

// React js with default did not give you routing system(have not native routing), for routing you most install react-router-dom package, follow below command <--comment
// npm i react-router-dom
