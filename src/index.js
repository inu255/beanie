import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import allReducers from "./reducers";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_BOLy_TboCfs1X6dqTFvoLpQcB1ie69g",
  authDomain: "beanie-9737c.firebaseapp.com",
  projectId: "beanie-9737c",
  storageBucket: "beanie-9737c.appspot.com",
  messagingSenderId: "215378413594",
  appId: "1:215378413594:web:6178f6971afae63cf869a3",
  measurementId: "G-RYGE1SDV2F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import App from "./App.js";

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/service-worker.js");
// }

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   // </React.StrictMode>,

//   document.getElementById("root")
// );
