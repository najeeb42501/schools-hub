import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SchoolsPage from "./pages/SchoolsPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import SchoolProfile from "./pages/SchoolProfile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/schoolprofile" element={<SchoolProfile />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
