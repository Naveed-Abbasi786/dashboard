import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const SignUp = lazy(() => import("./pages/SignUp"));
  const Login = lazy(() => import("./pages/Login"));
  const Otp = lazy(() => import("./pages/Otp"));
  const Layout = lazy(() => import("./layout/index"));
  const Overview = lazy(() => import("./pages/Overview"));
  const Brands = lazy(() => import("./pages/Brands"));
  const BrandManegment = lazy(() => import("./pages/BrandManegment"));
  const Generate = lazy(() => import("./pages/Generate"));
  const Insight = lazy(() => import("./pages/Insight"));
  const InsightBalance = lazy(() => import("./pages/InsightBalance"));
  const MarketingVisualAssets = lazy(() => import("./pages/generatePages/MarketingVisualAssets"));
  const HighImpact = lazy(() => import("./pages/generatePages/HighImpact"));
  const EngagingProduct = lazy(() => import("./pages/generatePages/EngagingProduct"));
  const VisualLibrary = lazy(() => import("./pages/generatePages/VisualLibrary"));
  const CopyWriting = lazy(() => import("./pages/generatePages/CopyWriting"));
  const PerfomanceDriven = lazy(() => import("./pages/generatePages/PerfomanceDriven"));
  const SoicalMediaVisual = lazy(() => import("./pages/generatePages/SoicalMediaVisual"));

 
  const routes = [
    { path: "/", element: <Overview />, index: true },
    { path: "/brand-menegment", element: <BrandManegment /> },
    { path: "/brand-list", element: <Brands /> },
    { path: "/generate", element: <Generate /> },
    { path: "/insight", element: <Insight /> },
    { path: "/insight-balance", element: <InsightBalance /> },
    { path: "/marketing-visual-assets", element: <MarketingVisualAssets /> },
    { path: "/high-impact", element: <HighImpact /> },
    { path: "/engaging-product", element: <EngagingProduct /> },
    { path: "/visual-libray", element: <VisualLibrary /> },
    { path: "/copy-writing", element: <CopyWriting /> },
    { path: "/perfomance-driven", element: <PerfomanceDriven /> },
    { path: "/soical-media-visuals", element: <SoicalMediaVisual /> },

  ];

  const standaloneRoutes = [
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/otp", element: <Otp /> },
  ];

  return (
    <BrowserRouter>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Routes>
          {/* Routes inside Layout */}
          <Route path="/" element={<Layout />}>
            {routes.map((route, index) =>
              route.index ? (
                <Route index element={route.element} key={index} />
              ) : (
                <Route path={route.path} element={route.element} key={index} />
              )
            )}
          </Route>

          {/* Standalone routes (without Layout) */}
          {standaloneRoutes.map((route, index) => (
            <Route path={route.path} element={route.element} key={`standalone-${index}`} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
