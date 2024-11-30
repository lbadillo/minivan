import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans.js';
import VanDetail from './pages/vans/VanDetail.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout.js';

import reportWebVitals from './reportWebVitals';
import './server.js';

import Income from './pages/host/Income.js';
import Reviews from './pages/host/Reviews.js';
import HostLayout from './components/HostLayout.js';
import Dashboard from './pages/host/Dashboard.js';
import HostVans from './pages/host/HostVans.js';
import HostVanDetail from './pages/host/HostVanDetail.js';
import DetailVanDetail from './pages/vans/detail/DetailVanDetail.js';
import DetailVanPhotos from './pages/vans/detail/DetailVanPhotos.js';
import DetailVanPrincing from './pages/vans/detail/DetailVanPricing.js';
import NotFound from './pages/NotFound.js';
import Login from './pages/Login.js';
import AuthRequired from './components/AuthRequired.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<DetailVanDetail />} />
                <Route path="pricing" element={<DetailVanPrincing />} />
                <Route path="photos" element={<DetailVanPhotos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
