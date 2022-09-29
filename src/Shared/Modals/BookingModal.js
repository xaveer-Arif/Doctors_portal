import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const [user, loading, error] = useAuthState(auth);
  const { id, name, slots } = treatment;

  const modalForm = (e) => {
    e.preventDefault();
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={modalForm}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-black"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">{name}</h3>
            <input
              disabled
              name="date"
              value={format(date, "PP")}
              className="input input-bordered input-secondary w-full max-w-xs"
            />

            <input
              disabled
              type="text"
              name="name"
              value={user?.displayName}
              className="input input-bordered input-secondary w-full max-w-xs "
            />
            <input
              disabled
              type="email"
              name="email"
              value={user?.email}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <select
              name="slot"
              className="select grid grid-cols-1 select-bordered select-secondary w-full max-w-xs "
            >
              {slots.map((slot, index) => (
                <option 
                key={index}
                value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs "
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
