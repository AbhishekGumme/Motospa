import * as React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Admin from "./Admin/Admin";
import Booking from "./Pages/Booking";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shops";
import JobCard from "./Pages/JobCard";
import Services from "./Pages/Services";
import AllUserList from "./Admin/AllUserList";
import Home from "./Pages/Home/index";

import AllShopList from "./Admin/AllShopList";
import AllServiceList from "./Admin/AllServicelist";
import AllModelList from "./Admin/AllModelList";

import AddShop from "./Admin/AddShop";
import AddService from "./Admin/AddService";
import AddMakeModel from "./Admin/AddMakeModel";

import EditShop from "./Admin/EditShop";
import EditService from "./Admin/EditService";

import EditShopForm from "./Admin/EditShopForm";
import EditServiceForm from "./Admin/EditServiceForm";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/shops" element={<Shop />}></Route>
            <Route path="/report" element={<JobCard />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/allshops" element={<AllShopList />}></Route>
            <Route path="/allusers" element={<AllUserList />}></Route>
            <Route path="/allservices" element={<AllServiceList />}></Route>
            <Route path="/allmakes" element={<AllModelList />}></Route>
            <Route path="/addshop" element={<AddShop />}></Route>
            <Route path="/addservice" element={<AddService />}></Route>
            <Route path="/addmakemodel" element={<AddMakeModel />}></Route>
            <Route path="/editshop" element={<EditShop />}></Route>
            <Route path="/editservice" element={<EditService />}></Route>
            <Route path="/editshopform" element={<EditShopForm />}></Route>
            <Route
              path="/editserviceform"
              element={<EditServiceForm />}
            ></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer theme="colored" />
      </div>
    </div>
  );
}

export default App;
