import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Default from "./Default";
// import Products from "./Products";

const Shops = lazy(() => import("./Default"));
const Products = lazy(() => import("./Products"));

function Pages() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shops />} />
          <Route path="shops" element={<Products />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Pages;
