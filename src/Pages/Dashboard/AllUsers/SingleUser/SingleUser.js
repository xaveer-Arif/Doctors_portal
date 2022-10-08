import { signOut } from "firebase/auth";
import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../Firebase/firebase.init";

const SingleUser = ({ user, index, refetch }) => {
  const { email, role } = user;
  const adminHandler = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // localStorage.removeItem('accessToken')
          // signOut(auth)
          // Navigate('/')
          toast.error("Failed to make admin");
        }

        return res.json();
      })
      .then((data) => {
        if (data.result.modifiedCount > 0) {
          toast.success("Successfully Made Admin");
          refetch();
        }
      });
    


  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{email}</th>
      <th>
        {role !== "Admin" && (
          <button  className="btn btn-xs btn-active" onClick={adminHandler}>
            Admin
          </button>
    
        )}
      </th>
      <th>
        <button className="btn btn-xs  btn-error">Delete</button>
      </th>
    </tr>
  );
};

export default SingleUser;
