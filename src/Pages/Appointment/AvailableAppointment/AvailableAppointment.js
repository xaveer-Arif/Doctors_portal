import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from '../../../Shared/Modals/BookingModal';
import Services from '../Services/Services';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null) 

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div>
             <p className='text-4xl text-center text-secondary font-semibold mb-20'>You have selected: {format(date, "PP")}</p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
         {
                services.map(service => <Services
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                ></Services>)
            }
         </div>
         {treatment && <BookingModal 

         treatment={treatment}
         setTreatment={setTreatment}
         date={date}
         ></BookingModal>}
             
        </div>
    );
};

export default AvailableAppointment;