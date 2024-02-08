import Header from "../Header/Header"
import Footer from "../Footer/Footer";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../config";
import { Link, useNavigate } from 'react-router-dom'

function AllUserList() {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = () => {
    const url = `${URL}/getallusers`;

    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      setAllUsers(result.data);
      
    });
  };



  const deleteUser = (id) => {

    const url = `${URL}/user/delete/${id}`;

    axios.delete(url).then((response)=>{
        const result= response.data
        console.log(result)
        fetchUsers()
    })

  };

  return (
    <><Header/>
      <div className="container table-responsive">
        <br/>
      <h3 className="display-5 text-center" ><b>All Users</b></h3>
        

        <div className="mb-5">
          <Link to="/admin" className="btn btn-light float-end">
            Go To Admin Page
          </Link>
          </div>

        <br/>
        {allUsers !== "" && (
          <table class="table table-hover">
            <thead className="table-dark">
              <tr>
                {" "}
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Address</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>

                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>{user.mobile}</td>
                    <td>{user.email}</td>
                    

                    <td><button type="button" class="btn btn-danger" onClick={() => {
                      deleteUser(user.id)
                    }} >Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default AllUserList;
