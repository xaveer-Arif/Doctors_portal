import React from 'react';

const Services = ({service, setTreatment}) => {
    const {name, slots} = service
 
    return (
        <div className="card w-full bg-base-100 text-center shadow-xl">
  <div className="card-body">
    <h2 className="text-secondary text-2xl font-semibold">{name}</h2>
    <p>{
        slots.length > 0 ? <span>{slots[0]}</span> : <span
        className='text-rose-700 '>Try another day</span>
        }</p>
    <p>{slots.length} {slots.length > 0 ? "spaces" : "space"} available</p>
    <div className="card-actions justify-center">
      {/* modal booking button  */}
        <label 
        disabled={slots.length === 0}
        onClick={ () => setTreatment(service)}
        htmlFor="booking-modal" 
        className="btn modal-button btn-secondary text-white">
        open modal</label>
    </div>
  </div>
</div>
    );
};

export default Services;