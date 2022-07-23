import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
// import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import * as ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";

import App from "./App";

// ReactDOM.render(
//     <React.StrictMode><App /></React.StrictMode>,
//     document.getElementById('root')
// );

// const container =  document.getElementById('root');
// const root = createRoot(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);