import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductListing from "./Pages/ProductListing";


export default function Routing() {
    return(
        <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ProductListing />} />
           {/* <Route path="/" element={ <Home />} />
           <Route path="/" element={ <Home />} />
           <Route path="/" element={ <Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    );
}