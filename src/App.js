import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
