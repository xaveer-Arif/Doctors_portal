import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment,setTreatment, date }) => {
  const { id, name, slots } = treatment;

  const modalForm = e => {
    e.preventDefault()
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form 
          onSubmit={modalForm}
          className="grid grid-cols-1 gap-3 justify-items-center">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-black">✕</label>
            <h3 className="font-bold text-lg">{name}</h3>
            <input
              disabled
              name="date"
              value={format(date, "PP")}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <select name="slot" className="select grid grid-cols-1 select-bordered select-secondary w-full max-w-xs ">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered input-secondary w-full max-w-xs "
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs "
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="input input-bordered input-secondary w-full max-w-xs btn btn-secondary"
            />
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
