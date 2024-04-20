import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Provider} from "react-redux";
// import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  // <AuthProvider>
  // <BrowserRouter>
  // <App />
  // </BrowserRouter> 
  // </AuthProvider>
    // </Provider>

      <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
