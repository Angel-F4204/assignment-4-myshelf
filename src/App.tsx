import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import StatusPage from "./pages/StatusPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items/:id" element={<ItemPage />} />
        <Route path="/list/:status" element={<StatusPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
