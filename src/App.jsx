import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const SignUp = lazy(() => import('./pages/SignUp'));
  const Login = lazy(() => import('./pages/Login'));
  const Otp = lazy(() => import('./pages/Otp'));
  const Layout = lazy(() => import('./layout/index'));
  const Overview = lazy(() => import('./pages/Overview'));
  const BrandManegment = lazy(() => import('./pages/BrandManegment'));
  const BrandViews = lazy(() => import('./pages/brands2'));
  const BrandList = lazy(() => import('./pages/brandList'));


  return (
    <BrowserRouter>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route  path='/brand-menegment' element={<BrandManegment />} />
            <Route  path='/brand-views' element={<BrandViews />} />
            <Route  path='/brand-list' element={<BrandList />} />

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
