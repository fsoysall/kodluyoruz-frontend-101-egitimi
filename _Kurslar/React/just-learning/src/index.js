import './12-Context/Theme.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.js';
// import reportWebVitals from './reportWebVitals.js';

// import Fetching from './8-Fetching/App - Fetching.js'
// import FetchingAxios from './8-Fetching/App - Axios.js'

// import Routing from './9-Routing/App - Routing.js'
// import RouteNesting from './9-Routing/Route Nesting - App.js'
// import FormikBasic from './10-Formik/Formik - App.js'

import Container from './12-Context/components/Container.js';
import { ThemeProvider } from './12-Context/ThemeContext.js'
import { UserProvider  } from './12-Context/UserContext.js'

console.log("Selamm.src.index.js")

// import ReactDOM from 'react-dom';
// ReactDOM.render(<Basic />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}    {/* <Fetching /> */}    {/* <FetchingAxios /> */}
    {/* <Routing /> */}
    {/* <RouteNesting /> */}
    {/* <FormikBasic /> */}
    <ThemeProvider >
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>

  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
