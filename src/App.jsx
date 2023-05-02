import { Route, Routes } from "react-router-dom";
import Background from "./components/Background/background";
import Home from "./pages/Home";
import History from "./pages/History";
import Dramas from "./pages/Dramas";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Picture from "./components/Picture/Picture";
import Error from "./pages/Error";

import "./App.scss"

function App() {

  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/dramas" element={<Dramas />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
