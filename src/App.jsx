import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import History from "./pages/history";
import Dramas from "./pages/dramas";
import PressReview from "./pages/pressReview";
import Contact from "./pages/contact";

import "./App.scss"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/dramas" element={<Dramas />} />
        <Route path="/pressReview" element={<PressReview />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
