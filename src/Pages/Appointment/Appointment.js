import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';



const Appointment = () => {
    const [date ,setDate] = useState(new Date())
    
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment  date={date}/>
        </div>
    );
};

export default Appointment;