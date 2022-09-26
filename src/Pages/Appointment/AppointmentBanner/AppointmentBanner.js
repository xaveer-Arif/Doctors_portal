import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import chair from "../../../Assets/images/chair.png"



const AppointmentBanner = ({date, setDate}) => {
    

    return (
        <div className="hero w-full ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="sm:w-full lg:w-96 xl-15 rounded-lg shadow-2xl" alt='' />
    
    <div className='w-full'>
    <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    />
    </div>
  </div>

</div>

    );
};

export default AppointmentBanner;