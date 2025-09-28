import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/404";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./css/Header.css";
import "./css/App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  console.log(location.pathname == "/");

  return (
    <>
      {location.pathname == "/" ||
      location.pathname == "/services" ||
      location.pathname == "/projects" ||
      location.pathname == "/about" ||
      location.pathname === "/contact" ? (
        <Header name="#header" />
      ) : (
        ""
      )}
      <main className="px-[1rem]">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
      {location.pathname == "/" ||
      location.pathname == "/services" ||
      location.pathname == "/projects" ||
      location.pathname == "/about" ||
      location.pathname == "/contact" ? (
        <Footer />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
