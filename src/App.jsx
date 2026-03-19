import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Header from "./components/Header";
import GroupHub from "./pages/GroupHub";
import CategoryHub from "./pages/CategoryHub";
import HomePage from "./pages/HomePage";
import SubcategoryPage from "./pages/SubcategoryPage";
import { allCategories, allSubcategories, categoryGroups } from "./data/categoryRegistry";

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
        {categoryGroups.map((group) => (
          <Route key={group.id} path={group.path} element={<GroupHub groupId={group.id} />} />
        ))}

        {/* Category hub pages (categories WITH subcategories) */}
        {allCategories
          .filter((cat) => cat.subcategories && cat.subcategories.length > 0)
          .map((cat) => (
            <Route
              key={cat.groupId + cat.slug}
              path={`${cat.groupPath}/${cat.slug}`}
              element={<CategoryHub groupId={cat.groupId} categorySlug={cat.slug} />}
            />
          ))}

        {/* Product pages (subcategories + leaf categories) */}
        {allSubcategories.map((sub) => (
          <Route
            key={sub.path}
            path={sub.path}
            element={
              <SubcategoryPage
                title={sub.name}
                description={sub.description}
                products={sub.products}
                priceBands={sub.priceBands}
                rubric={sub.rubric}
                eyebrow={sub.categoryName || sub.groupLabel}
                scoreLabels={sub.scoreLabels}
              />
            }
          />
        ))}

        {/* Fallback */}
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