import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";

const content = (
  <div className="container">
    <App />
  </div>
);
ReactDom.render(content, document.querySelector("#root"));

// To connect serve we most install axios with below command and use it to server connection <--comment
// npm i axios
