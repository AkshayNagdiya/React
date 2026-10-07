import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import GetStarted from "./Pages/Getstarted";
import WebDevelopment from "./Pages/Webdevelopment";
import Login from "./Pages/LoginPage";
import Register from "./Pages/Register";
import ProtectedRouting from "./Components/ProtectedRouting";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  let isLogin = true;

  const user = {
    name : "Nafees",
    email : "nafees@gmail.com"
  }
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/"
          element={
            <ProtectedRouting idLogin={isLogin}>
              <Home />
            </ProtectedRouting>
          }
        />

        <Route path="/" element={<Home />}>
          <Route path="getstarted" element={<GetStarted />} />
        </Route>
        <Route path="/login" element={<Login userData={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/" element={<Services />} />

        <Route path="/services/webdev" element={<WebDevelopment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
