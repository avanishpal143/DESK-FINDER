import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import DesksPage from "./pages/DesksPage";
import ManagedOfficesPage from "./pages/ManagedOfficesPage";
import MeetingRoomsPage from "./pages/MeetingRoomsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { Toaster } from "sonner";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    document.title = "The Desk Finder — One Pass. Every Desk. Done.";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/desks" element={<DesksPage />} />
          <Route path="/managed-offices" element={<ManagedOfficesPage />} />
          <Route path="/meeting-rooms" element={<MeetingRoomsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
