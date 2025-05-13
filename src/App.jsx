import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrandList from "./pages/BrandList";
function App() {
  const SignUp = lazy(() => import("./pages/SignUp"));
  const Login = lazy(() => import("./pages/Login"));
  const Otp = lazy(() => import("./pages/Otp"));
  const Layout = lazy(() => import("./layout/index"));
  const Overview = lazy(() => import("./pages/Overview"));
  const BrandManegment = lazy(() => import("./pages/BrandManegment"));
  // const BrandList = lazy(() => import("./pages/BrandList"));
  const Generate = lazy(() => import("./pages/Generate"));
  const Insight = lazy(() => import("./pages/Insight"));
  const InsightBalance = lazy(() => import("./pages/InsightBalance"));
  const VisualAssest = lazy(() => import("./pages/VisualAssest"));


  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="/brand-menegment" element={<BrandManegment />} />
            <Route path="/brand-list" element={<BrandList />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/insight-balance" element={<InsightBalance />} />
            <Route path="/visual-assest" element={<VisualAssest />} />

           
          </Route>

          {/* Standalone Pages (without Layout) */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
