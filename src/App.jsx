import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Header from "./components/Header";
import HeadphonesHub from "./pages/HeadphonesHub";
import SmartphonesHub from "./pages/SmartphonesHub";
import LaptopsHub from "./pages/LaptopsHub";
import GamingGearHub from "./pages/GamingGearHub";
import GroupHub from "./pages/GroupHub";
import HomePage from "./pages/HomePage";
import SubcategoryPage from "./pages/SubcategoryPage";
import { overEar, PRICE_BANDS as overEarBands, rubric as overEarRubric } from "./data/overEar";
import { inEar, PRICE_BANDS as inEarBands, rubric as inEarRubric } from "./data/inEar";
import { onEar, PRICE_BANDS as onEarBands, rubric as onEarRubric } from "./data/onEar";
import { sports, PRICE_BANDS as sportsBands, rubric as sportsRubric } from "./data/sports";
import { smartphonesAndroid, PRICE_BANDS as androidBands, rubric as androidRubric } from "./data/personal/smartphonesAndroid";
import { smartphonesIphone, PRICE_BANDS as iphoneBands, rubric as iphoneRubric } from "./data/personal/smartphonesIphone";
import { laptopsWindows, PRICE_BANDS as windowsBands, rubric as windowsRubric } from "./data/personal/laptopsWindows";
import { laptopsMacBook, PRICE_BANDS as macbookBands, rubric as macbookRubric } from "./data/personal/laptopsMacBook";
import { gamingHeadsets, PRICE_BANDS as headsetBands, rubric as headsetRubric } from "./data/personal/gamingHeadsets";
import { gamingControllers, PRICE_BANDS as controllerBands, rubric as controllerRubric } from "./data/personal/gamingControllers";

function App() {
  return (
    <div className="site-shell">
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Group hub pages */}
        <Route path="/personal" element={<GroupHub groupId="personal" />} />
        <Route path="/kitchen" element={<GroupHub groupId="kitchen" />} />
        <Route path="/common" element={<GroupHub groupId="common" />} />

        {/* Headphones category hub */}
        <Route path="/personal/headphones" element={<HeadphonesHub />} />

        {/* Headphones subcategory pages */}
        <Route
          path="/personal/headphones/over-ear"
          element={
            <SubcategoryPage
              eyebrow="Headphones"
              title="Over-Ear Headphones"
              description="Full-size headphones ranked by value, comfort, sound, and ANC performance."
              products={overEar}
              priceBands={overEarBands}
              rubric={overEarRubric}
              scoreLabels={["Value", "Reliability", "Sound", "Comfort"]}
            />
          }
        />
        <Route
          path="/personal/headphones/in-ear"
          element={
            <SubcategoryPage
              eyebrow="Headphones"
              title="In-Ear Earbuds"
              description="True wireless earbuds for commuting, calls, and everyday listening."
              products={inEar}
              priceBands={inEarBands}
              rubric={inEarRubric}
              scoreLabels={["Value", "Reliability", "Sound", "Comfort"]}
            />
          }
        />
        <Route
          path="/personal/headphones/on-ear"
          element={
            <SubcategoryPage
              eyebrow="Headphones"
              title="On-Ear Headphones"
              description="Compact, portable headphones that balance sound quality and portability."
              products={onEar}
              priceBands={onEarBands}
              rubric={onEarRubric}
              scoreLabels={["Value", "Reliability", "Sound", "Comfort"]}
            />
          }
        />
        <Route
          path="/personal/headphones/sports"
          element={
            <SubcategoryPage
              eyebrow="Headphones"
              title="Sports & Active"
              description="Sweat-proof, waterproof picks for running, swimming, and gym workouts."
              products={sports}
              priceBands={sportsBands}
              rubric={sportsRubric}
              scoreLabels={["Value", "Reliability", "Sound", "Comfort"]}
            />
          }
        />

        {/* Backward-compatible redirects for old /headphones/* URLs */}
        <Route path="/headphones" element={<Navigate to="/personal/headphones" replace />} />
        <Route path="/headphones/over-ear" element={<Navigate to="/personal/headphones/over-ear" replace />} />
        <Route path="/headphones/in-ear" element={<Navigate to="/personal/headphones/in-ear" replace />} />
        <Route path="/headphones/on-ear" element={<Navigate to="/personal/headphones/on-ear" replace />} />
        <Route path="/headphones/sports" element={<Navigate to="/personal/headphones/sports" replace />} />

        {/* Smartphones category hub */}
        <Route path="/personal/smartphones" element={<SmartphonesHub />} />

        {/* Smartphones subcategory pages */}
        <Route
          path="/personal/smartphones/android"
          element={
            <SubcategoryPage
              eyebrow="Smartphones"
              title="Android Phones"
              description="The best Android phones ranked by camera, battery performance, and long-term value."
              products={smartphonesAndroid}
              priceBands={androidBands}
              rubric={androidRubric}
              scoreLabels={["Value", "Reliability", "Camera", "Battery"]}
            />
          }
        />
        <Route
          path="/personal/smartphones/iphone"
          element={
            <SubcategoryPage
              eyebrow="Smartphones"
              title="iPhones"
              description="Every current iPhone ranked across Standard, Pro, and Pro Max tiers by real-world value and longevity."
              products={smartphonesIphone}
              priceBands={iphoneBands}
              rubric={iphoneRubric}
              scoreLabels={["Value", "Reliability", "Camera", "Battery"]}
            />
          }
        />

        {/* Laptops category hub */}
        <Route path="/personal/laptops" element={<LaptopsHub />} />

        {/* Laptops subcategory pages */}
        <Route
          path="/personal/laptops/windows"
          element={
            <SubcategoryPage
              eyebrow="Laptops"
              title="Windows Laptops"
              description="Budget workhorses to premium ultrabooks — ranked on real-world performance, display, and build quality."
              products={laptopsWindows}
              priceBands={windowsBands}
              rubric={windowsRubric}
              scoreLabels={["Value", "Reliability", "Performance", "Portability"]}
            />
          }
        />
        <Route
          path="/personal/laptops/macbook"
          element={
            <SubcategoryPage
              eyebrow="Laptops"
              title="MacBooks"
              description="Every MacBook Air and Pro configuration ranked by performance tier, portability, and value for money."
              products={laptopsMacBook}
              priceBands={macbookBands}
              rubric={macbookRubric}
              scoreLabels={["Value", "Reliability", "Performance", "Portability"]}
            />
          }
        />

        {/* Gaming Gear category hub */}
        <Route path="/personal/gaming-gear" element={<GamingGearHub />} />

        {/* Gaming Gear subcategory pages */}
        <Route
          path="/personal/gaming-gear/headsets"
          element={
            <SubcategoryPage
              eyebrow="Gaming Gear"
              title="Gaming Headsets"
              description="Wired and wireless gaming headsets ranked on audio accuracy, mic clarity, and comfort for long sessions."
              products={gamingHeadsets}
              priceBands={headsetBands}
              rubric={headsetRubric}
              scoreLabels={["Value", "Reliability", "Performance", "Comfort"]}
            />
          }
        />
        <Route
          path="/personal/gaming-gear/controllers"
          element={
            <SubcategoryPage
              eyebrow="Gaming Gear"
              title="Controllers"
              description="Budget, mid-range, and premium controllers for PC, PlayStation, Xbox, and Nintendo Switch compared on feel and features."
              products={gamingControllers}
              priceBands={controllerBands}
              rubric={controllerRubric}
              scoreLabels={["Value", "Reliability", "Performance", "Comfort"]}
            />
          }
        />

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