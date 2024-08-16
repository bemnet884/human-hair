import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReview from "./sections/CustomerReview";
import Subscribe from "./sections/Subscribe";
import AllProducts from "./sections/AllProducts";
import ContactUs from "./sections/ContactUs";
import AboutUs from "./sections/AboutUs";
import SignInForm from "./sections/SignInForm";
import ProductDetail from "./sections/ProductDetail";
import SpecialOfferDetail from './sections/SpecialOfferDetail';
import SimpleNav from "./sections/SimpleNav";

function AppContent() {
  const location = useLocation();
  
  const noHeaderFooterRoutes = ["/Contact-Us", "/Sign-In", "/About-Us"];
  const shouldRenderHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <main className="relative">
      {shouldRenderHeaderFooter ? <Nav /> : <SimpleNav />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
              </section>
              <section className="padding">
                <PopularProducts />
              </section>
              <section className="padding">
                <SuperQuality />
              </section>
              <section className="padding-x py-10">
                <Services />
              </section>
              <section className="padding">
                <SpecialOffer />
              </section>
              <section className="bg-pale-blue padding">
                <CustomerReview />
              </section>
              <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
              </section>
            </>
          }
        />
        <Route path="/All-Products" element={<AllProducts />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Sign-In" element={<SignInForm />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/specialOffer/:id" element={<SpecialOfferDetail />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {shouldRenderHeaderFooter && (
        <section className="bg-violet-300 padding-x padding-t pb-8">
          <Footer />
        </section>
      )}
    </main>
  );
}

function App() {
  return (
    <Router basename="/Human-Hair">
      <AppContent />
    </Router>
  );
}

export default App;
