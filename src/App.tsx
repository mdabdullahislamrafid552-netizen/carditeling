import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ClientProvider } from './clients/ClientContext';
import { ClientRouteGuard } from './clients/ClientRouteGuard';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Process from './pages/Process';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import ServiceAreas from './pages/ServiceAreas';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import BeforeAfter from './pages/BeforeAfter';
import Team from './pages/Team';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import { SmoothScroll } from './components/layout/SmoothScroll';

const AppRoutes = () => (
  <Routes>
    {/* Standard Routes */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="services/:serviceSlug" element={<ServiceDetail />} />
      <Route path="ceramic-coating" element={<ServiceDetail />} />
      <Route path="paint-correction" element={<ServiceDetail />} />
      <Route path="paint-protection-film" element={<ServiceDetail />} />
      <Route path="interior-detailing" element={<ServiceDetail />} />
      <Route path="exterior-detailing" element={<ServiceDetail />} />
      <Route path="before-after" element={<BeforeAfter />} />
      <Route path="packages" element={<Packages />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="results" element={<Gallery />} />
      <Route path="gallery/:vehicleSlug" element={<GalleryDetail />} />
      <Route path="process" element={<Process />} />
      <Route path="mobile-detailing" element={<ServiceDetail />} />
      <Route path="fleet-detailing" element={<ServiceDetail />} />
      <Route path="team" element={<Team />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="service-areas" element={<ServiceAreas />} />
      <Route path="service-area" element={<ServiceAreas />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:articleSlug" element={<BlogArticle />} />
      <Route path="contact" element={<Contact />} />
      <Route path="request-quote" element={<Contact />} />
      <Route path="book-detail" element={<Contact />} />
      <Route path="book" element={<Contact />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
    </Route>

    {/* Demo Routes */}
    <Route path="/demo/:clientSlug" element={<ClientRouteGuard />}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="ceramic-coating" element={<ServiceDetail />} />
        <Route path="paint-correction" element={<ServiceDetail />} />
        <Route path="paint-protection-film" element={<ServiceDetail />} />
        <Route path="interior-detailing" element={<ServiceDetail />} />
        <Route path="exterior-detailing" element={<ServiceDetail />} />
        <Route path="before-after" element={<BeforeAfter />} />
        <Route path="packages" element={<Packages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="results" element={<Gallery />} />
        <Route path="gallery/:vehicleSlug" element={<GalleryDetail />} />
        <Route path="process" element={<Process />} />
        <Route path="mobile-detailing" element={<ServiceDetail />} />
        <Route path="fleet-detailing" element={<ServiceDetail />} />
        <Route path="team" element={<Team />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="service-areas" element={<ServiceAreas />} />
        <Route path="service-area" element={<ServiceAreas />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:articleSlug" element={<BlogArticle />} />
        <Route path="contact" element={<Contact />} />
        <Route path="request-quote" element={<Contact />} />
        <Route path="book-detail" element={<Contact />} />
        <Route path="book" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      </Route>
    </Route>

    {/* 404 Fallback */}
    <Route path="*" element={<Layout />}>
      <Route index element={<NotFound />} />
    </Route>
  </Routes>
);

const App = () => {
  return (
    <ClientProvider>
      <SmoothScroll>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </SmoothScroll>
    </ClientProvider>
  );
};

export default App;
