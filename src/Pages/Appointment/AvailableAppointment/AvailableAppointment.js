import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookingModal from "../../../Shared/Modals/BookingModal";
import Services from "../Services/Services";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([])
  const [treatment, setTreatment] = useState(null);
  const formateDate = format(date, "PP");

  const {
    isLoading,
    data: services,refetch
  } = useQuery(("available", formateDate), () =>
    fetch(`http://localhost:5000/available?date=${formateDate}`).then((res) => res.json())
  );
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p className="text-4xl text-center text-secondary font-semibold mb-20">
        You have selected: {format(date, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
          {
                services?.map(service => <Services
                key={service._id}
                service={service}
                
                setTreatment={setTreatment}
                ></Services>)
            }
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
          date={date}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
