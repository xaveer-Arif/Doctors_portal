import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import useAdmin from '../../../Hooks/useAdmin';

const MyDashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
         <Outlet/>
          
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto lg:w-72 sm:w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>Appointment</Link></li>
            <li><Link to="/dashboard/review">Reviews</Link></li>
            {admin && <li><Link to="/dashboard/allUsers">All Users</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default MyDashboard;