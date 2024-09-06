import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Afghanes from "./pages/Afghanes";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Route pour la page indépendante sans Header et Footer */}
        <Route path="/afghanes" element={<Afghanes />} />

        {/* Les routes avec Header et Footer */}
        <Route 
          path="*" 
          element={
            <>
              <Header />
              <App />
              <Footer />
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
