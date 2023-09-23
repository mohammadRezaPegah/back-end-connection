import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";

const content = (
  <div className="container">
    <App />
  </div>
);
ReactDom.render(content, document.querySelector("#root"));
