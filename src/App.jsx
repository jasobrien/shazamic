import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DisclosurePage from "./pages/DisclosurePage";
import HeadphonesPage from "./pages/HeadphonesPage";
import HomePage from "./pages/HomePage";
import MethodologyPage from "./pages/MethodologyPage";

function App() {
  return (
    <div className="site-shell">
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/methodology" element={<MethodologyPage />} />
        <Route path="/disclosure" element={<DisclosurePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer">
        <p>Shazamic - Compare. Choose. Done.</p>
        <p className="affiliate-disclosure">
          Affiliate disclosure: We may earn a commission from Amazon purchases at no extra cost to you.
        </p>
      </footer>
    </div>
  );
}

export default App;