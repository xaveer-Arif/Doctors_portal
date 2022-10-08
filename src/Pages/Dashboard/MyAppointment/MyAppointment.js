import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const MyAppointment = () => {
  const [bookedServices, setBookedServices] = useState([])
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`,{
      method:"GET",
      headers:{
        "authorization": `Bearer ${localStorage.getItem('accessToken')}` 
      }
    })
    .then(res => {
      if(res.status === 401 || res.status === 403){
        signOut(auth)
        localStorage.removeItem('accessToken')
        navigate('/')
      }
      return res.json()
    })
    .then(data => {
      setBookedServices(data)
    })
  },[user, navigate])
    return (
        <div className="overflow-x-auto">
        <table className="table lg:w-full sm:w-96">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {
              bookedServices.map((bookedService, index )=> <tr key={index}>
              <th>{index+1}</th>
              <td>{bookedService.patientName}</td>
              <td>{bookedService.treatment}</td>
              <td>{bookedService.slot}</td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
    );
};

export default MyAppointment;