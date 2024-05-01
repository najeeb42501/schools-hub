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
import EditSchoolProfile from "./school/EditSchoolProfile";
import AdminDashboard from "./admin/AdminDashboard";
import AIComponent from "./ai/AIComponent";
import { AdminElement, SchoolElement, UserElement } from "./routes/Routes";
import { useAppContext } from "./state/ContextAPI";
import BlogPost from "./pages/BlogPost";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoibmFqZWViNDI1MDEiLCJhIjoiY2x2bTdoaXR0MGQ5aTJpbnlqZmpwbjZqdyJ9.HXwQcQdfspyRd-FwDGUgPw";

function App() {
  const { state } = useAppContext();
  console.log("App:", state);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/schoolprofile/:schoolID" element={<SchoolProfile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogID" element={<BlogPost />} />
        <Route path="/" exact element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <AdminElement user={state}>
              <AdminDashboard />
            </AdminElement>
          }
        />
        <Route
          path="/aibot"
          element={
            <UserElement user={state}>
              <AIComponent />
            </UserElement>
          }
        />
        <Route
          path="/editschoolprofile"
          element={
            <SchoolElement user={state}>
              <EditSchoolProfile />
            </SchoolElement>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

//ROUTES COMPONENETS

export default App;
