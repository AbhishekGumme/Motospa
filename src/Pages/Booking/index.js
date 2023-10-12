import axios from "axios";
import { URL } from "../../config";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";
// import { Link } from "react-router-dom"

import { toast } from "react-toastify";

const Booking = () => {
  const navigate = useNavigate();
  const [jobCard, setJobCard] = useState([]);
  const [user, setUser] = useState([]);
  const [shops, setshops] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [model, setModel] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [licencePlate, setLicencePlate] = useState("");
  const [allservices, setallservices] = useState([]);
  const [manufacturedYear, setManufacturedYear] = useState("");
  const [serviceplan, setServicePlan] = useState("");

  const { firstName } = sessionStorage;
  function finalReport() {
    const url = `${URL}/shop/findshop/${sessionStorage.getItem("shopId")}`;

    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        console.log(response.data);
        setshops(result.data);
      })
      .then(() => {
        const url = `${URL}/findmodel/${sessionStorage.getItem("modelId")}`;

        axios.get(url).then((response) => {
          const result = response.data;
          console.log(response.data);
          setModel(result.data);
        });
      })
      .then(() => {
        const url = `${URL}/users/finduser/${sessionStorage.getItem("id")}`;

        axios.get(url).then((response) => {
          const result = response.data;
          console.log(result);

          setUser(result.data);
        });
      })
      .then(() => {
        const url = `${URL}/findservice/${sessionStorage.getItem("serviceId")}`;

        axios.get(url).then((response) => {
          const result = response.data;
          console.log(result);

          setallservices(result.data);
        });
      })
      .then(() => {
        //licence_plate | user_id | make_model_id | manufactured_year | insert_ts
        const { id, modelId } = sessionStorage;

        let userId = sessionStorage.getItem("id");
        console.log("USerID " + userId + " " + modelId);
        console.log("MFG " + manufacturedYear);
        console.log("LP " + licencePlate);

        if (licencePlate == 0 && licencePlate != 10) {
          toast.warning("Please enter enter licence plate");
        } else if (manufacturedYear == 0) {
          toast.warning("Please enter manufactured year");
        }
        const body = {
          licencePlate,
          userId,
          modelId,
          manufacturedYear,
        };

        const url = `${URL}/users/vehicle/addvehicle`;

        axios.post(url, body).then((response) => {
          const result = response.data;
          console.log(result);
          setVehicle(result.data);
          console.log("SetVehciele " + response.data);

          sessionStorage.setItem("vehicleId", response.data.id);
        });
      })
      .then(() => {
        //schedule_date | schedule_time | user_id | vehicle_id | service_id | shop_id
        const { id, modelId, vehicleId, serviceId, shopId } = sessionStorage;

        let userId = sessionStorage.getItem("id");
        console.log("USerID " + userId + " " + modelId);
        console.log("MFG " + manufacturedYear);
        console.log("LP " + licencePlate);
        console.log("VehicleId " + vehicleId);

        let serviceId1 = parseInt(serviceId);
        const body = {
          date,
          userId,
          time,
          "serviceId":serviceId1,
          vehicleId,
          "shopId":parseInt(shopId),
        };

        const url = `${URL}/addjobcard`;

        axios.post(url, body).then((response) => {
          const result = response.data;
          console.log(result);
          setJobCard(result.data);
          console.log("RESPONSE: " + response.data.id);
          sessionStorage.setItem("jobcardId", response.data.id);
        });
      });
  }

  function setseconds() {
    document.getElementById("myTime").step = "10";
  }

  useEffect(() => {
    finalReport();
  }, []);

  return (
    <div style={{ backgroundColor: "bisque" }}>
      <Header />

      <div className="container">
        <div>
          <br />

          <div className="container">
            <div className="col">
              {/* data */}
              <div
                className="form"
                style={{ marginLeft: 200, marginRight: 200 }}
              >
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Licence Plate :</b>
                  </label>
                  <input
                    onChange={(e) => {
                      setLicencePlate(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Manufactured Year :</b>
                  </label>
                  <input
                    onChange={(e) => {
                      setManufacturedYear(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Book Date :</b>
                  </label>

                  <input
                    type="date"
                    onChange={(e) => {
                      setDate(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Book Time :</b>
                  </label>

                  <input
                    type="time"
                    id="myTime"
                    onChange={(e) => {
                      setseconds();
                      setTime(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Make :</b>
                  </label>
                  <input
                    disabled
                    defaultValue={sessionStorage.getItem("makename")}
                    onChange={(e) => {}}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Model :</b>
                  </label>
                  <input
                    disabled
                    defaultValue={model.modelName}
                    onChange={(e) => {}}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>ShopName :</b>
                  </label>
                  <input
                    disabled
                    defaultValue={shops.shopName}
                    onChange={(e) => {}}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Service plan :</b>
                  </label>
                  <input
                    disabled
                    defaultValue={allservices.serviceName}
                    onChange={(e) => {}}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Service Details :</b>
                  </label>
                  <textarea
                    disabled
                    defaultValue={allservices.serviceDetails}
                    onChange={(e) => {}}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    <b>Service Price :</b>
                  </label>
                  <input
                    disabled
                    defaultValue={allservices.servicePrice}
                    onChange={(e) => {}}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <button
                    className="btn btn-success float-end"
                    onClick={() => {
                      if (firstName != undefined) {
                        finalReport();
                        navigate("/report");
                      } else {
                        navigate("/signin");
                      }
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
