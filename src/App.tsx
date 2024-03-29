import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/Login/SignUp";
import IngredientListPage from "./components/cookApp/IngredientList";
import SignIn from "./components/Login/SignIn"
import InventoryListPage from "./components/inventory/InventoryList";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/products" element={<ProductPage/>}  />
        <Route path="/home" element={<HomePage/>}  />
        <Route path='/cookApp/home' element={<IngredientListPage/>} />
        <Route path="/inventory" element={<InventoryListPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
