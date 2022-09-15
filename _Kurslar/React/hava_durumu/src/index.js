import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HavaDurumuProvider } from "./components/HavaDurumu Provider";

export const HDC = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HavaDurumuProvider>
      <App />
    </HavaDurumuProvider>
  </React.StrictMode>
);


