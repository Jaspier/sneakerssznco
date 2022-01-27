import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import FaqScreen from "./screens/FaqScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductListScreen from "./screens/ProductListScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route index element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/faq" element={<FaqScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/shop" element={<ShopScreen />} />
              <Route
                path="/admin/productlist"
                element={<ProductListScreen />}
              />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
