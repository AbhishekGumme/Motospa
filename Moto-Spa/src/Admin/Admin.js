import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { SiExpensify } from "react-icons/si";
import { useEffect, useState } from "react";

import {
  FcLike,
  FcDeleteDatabase,
  FcServices,
  FcAutomotive,

  FcShop,
  FcBusinessman,
  FcTodoList,
  FcPlus,
  FcRemoveImage,
  FcFullTrash,
  FcHeatMap,
  FcInTransit,
} from "react-icons/fc";

import { AiFillCar, } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { FaCarCrash, } from "react-icons/fa";

import { RiChatDeleteFill } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { } from "react-icons/go";
import { MdAddBusiness } from "react-icons/md"

import { Navigate, useNavigate } from "react-router";

import { URL } from '../config'
import axios from "axios";
import "./Admin.css";
import { MenuOutlined } from "@material-ui/icons";
const Block = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 250px;
  height: 150px;
  padding: 15px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 3px gray;
`;

const Admin = () => {
  const navigate = useNavigate();
  const userCounts = () => { };
  const { firstName } = sessionStorage

  return (
    <div><Header />
      <br />
      <div className="sidebar-container">
        <div className="profile">
        
            
        </div>

        <h5 className="display-5 text-left">Welcome {firstName}</h5>
        <br />

        <br />

        <div class="row">

          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 100 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/addshop");
              }}
            >
              <MdAddBusiness style={{ fontSize: "80px" }}></MdAddBusiness>
              <h4 className="header">ADD SHOP</h4>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
          {/* {---------------------------} */}
          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 80 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/editshop");
              }}
            >
              <FcAutomotive style={{ fontSize: "80px" }}></FcAutomotive>
              <h3 className="header">EDIT SHOP</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
          {/* {_------------------------------------} */}

          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 50 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/allshops");
              }}
            >
              <FcDeleteDatabase style={{ fontSize: "80px" }}></FcDeleteDatabase>
              <h3 className="header">DELETE SHOP</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
        </div>
        <br />
        {/* {-----------------------------------------------------------------------------} */}
        <div class="row">
          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 100 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/addservice");
              }}
            >
              <GiAutoRepair style={{ fontSize: "80px" }}></GiAutoRepair>
              <h3 className="header">ADD SERVICE</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
          {/* {---------------------------} */}
          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 80 }} >
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/editservice");
              }}
            >
              <FcServices style={{ fontSize: "80px" }}></FcServices>
              <h3 className="header">EDIT SERVICE</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
          {/* {_------------------------------------} */}

          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 50 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/allservices");
              }}
            >
              <RiChatDeleteFill style={{ fontSize: "70px" }}></RiChatDeleteFill>
              <h5 className="header">DROP SERVICE</h5>

              <h5 className="block-title">{userCounts} </h5>
            </Block>
          </div>
        </div>
        <br />
        {/* {-----------------------------------------------------------------------------} */}
        <div class="row">
          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 100 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/addmakemodel");
              }}
            >
              <IoCarSportSharp style={{ fontSize: "80px" }}></IoCarSportSharp>
              <h3 className="header">CAR BRAND</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
          {/* {---------------------------} */}
          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 80 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/allmakes");
              }}
            >
              <FaCarCrash style={{ fontSize: "80px" }}></FaCarCrash>
              <h3 className="header"> DELETE BRAND</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
          {/* {_------------------------------------} */}

          <div class="col-sm-6 col-lg-4 col-md-3" style={{ paddingLeft: 50 }}>
            <Block
              className="happy-client clickable-block"
              onClick={() => {
                navigate("/allusers");
              }}
            >
              <FcBusinessman style={{ fontSize: "80px" }}></FcBusinessman>
              <h3 className="header">  CUSTOMERS</h3>

              <h4 className="block-title">{userCounts} </h4>
            </Block>
          </div>
        </div>
        <br />

      </div>
      <Footer />
    </div>
  );
};

export default Admin;
