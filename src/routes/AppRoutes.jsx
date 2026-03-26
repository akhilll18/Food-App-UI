import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Categories from "../pages/Categories";


import HomeChefPartner from "../pages/home-chefpartner/HomeChefPartner";
import MerchantPartner from "../pages/home-chefpartner/MerchantPartner";
import DeliveryPartner from "../pages/home-chefpartner/DeliveryPartner";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/categories" element={<Categories />} />
      
     
      
     
      <Route path="/partner/home-chef" element={<HomeChefPartner />} />
      <Route path="/partner/merchant" element={<MerchantPartner />} />
      <Route path="/partner/delivery" element={<DeliveryPartner />} />
     
      
    </Routes>
  );
};

export default AppRoutes;