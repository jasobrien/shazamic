import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DisclosurePage from "./pages/DisclosurePage";
import HeadphonesHub from "./pages/HeadphonesHub";
import HomePage from "./pages/HomePage";
import MethodologyPage from "./pages/MethodologyPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import { overEar, PRICE_BANDS as overEarBands, rubric as overEarRubric } from "./data/overEar";
import { inEar, PRICE_BANDS as inEarBands, rubric as inEarRubric } from "./data/inEar";
import { onEar, PRICE_BANDS as onEarBands, rubric as onEarRubric } from "./data/onEar";
import { sports, PRICE_BANDS as sportsBands, rubric as sportsRubric } from "./data/sports";

function App() {
  return (
    <div className="site-shell">
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesHub />} />
        <Route
          path="/headphones/over-ear"
          element={
            <SubcategoryPage
              title="Over-Ear Headphones"
              description="Full-size headphones ranked by value, comfort, sound, and ANC performance."
              products={overEar}
              priceBands={overEarBands}
              rubric={overEarRubric}
            />
          }
        />
        <Route
          path="/headphones/in-ear"
          element={
            <SubcategoryPage
              title="In-Ear Earbuds"
              description="True wireless earbuds for commuting, calls, and everyday listening."
              products={inEar}
              priceBands={inEarBands}
              rubric={inEarRubric}
            />
          }
        />
        <Route
          path="/headphones/on-ear"
          element={
            <SubcategoryPage
              title="On-Ear Headphones"
              description="Compact, portable headphones that balance sound quality and portability."
              products={onEar}
              priceBands={onEarBands}
              rubric={onEarRubric}
            />
          }
        />
        <Route
          path="/headphones/sports"
          element={
            <SubcategoryPage
              title="Sports & Active"
              description="Sweat-proof, waterproof picks for running, swimming, and gym workouts."
              products={sports}
              priceBands={sportsBands}
              rubric={sportsRubric}
            />
          }
        />
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