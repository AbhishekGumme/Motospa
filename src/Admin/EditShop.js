import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from '../config'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";




function EditShop() {
  useEffect(() => {
    fetchShops();
  }, []);

  const navigate = useNavigate();
  
  const [allshop, setallshops] = useState([]);

  // const [shop ,setShop]=useState();
  // const [shopId, setShopId] = useState("");

  const fetchShops = () => {
    const url = `${URL}/getallshops`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setallshops(result.data);
    });
  };

 

  return (
    <> 
      <Header />
      <div className="container table-responsive" >
        <br/>
        <h3 className="display-5 text-center" ><b>Edit Shop</b></h3>
       
        <div className="mb-5">
          <Link to="/admin" className="btn btn-light float-end">
            Go To Admin Page
          </Link>
        </div>
        <hr/>

        <br />
        {allshop !== "" && (
          <table class="table table-hover">
            <thead className="table-primary">
              <tr>
                {" "}
                <th scope="col">Id</th>
                <th scope="col">ShopName</th>
                <th scope="col">ShopEmail</th>
                <th scope="col">Contact</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">Details</th>
                <th scope="col">Rating</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {allshop.map((shop) => {
                return (
                  <tr>
                    <td>{shop.id}</td>
                    <td>{shop.shopName}</td>
                    <td>{shop.shopEmail}</td>
                    <td>{shop.contact}</td>
                    <td>{shop.city}</td>
                    <td>{shop.address}</td>
                    <td>{shop.details}</td>
                    <td>{shop.rating}</td>
                   
                    {/* <td><button type="button" class="btn btn-warning" onClick={()=>{
                      sessionStorage['shopId']=shop.id
                      navigate("/editshop")
                    }} >Edit</button></td> */}

                    <td>
                      <div className="col">
                        {shop && (
                          <button
                            onClick={() => {
                              navigate("/editshopform", { state: { shop: shop } });
                            }}
                            className="btn btn-warning float-end">
                            Edit
                          </button>
                        )}
                      </div>
                    </td>

                    {/* <td><button type="button" class="btn btn-danger" onClick={() => {
                      deleteShop(shop.id)
                    }} >Delete</button></td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <br />
      <Footer />
    </>
  );
}

export default EditShop;

