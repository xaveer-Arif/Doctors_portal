import React from "react";
import clock from "../../../Assets/icons/clock.svg";

const SingleCard = ({ cardInfo }) => {
  const { text, paragraph, color, img } = cardInfo;
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${color} lg:my-2 md:my-4 my-3`}>
      <figure>
        <img src={img} className='h-14 pl-3 mt-4 font-bold' alt="Album" />
      </figure>
      <div className="card-body p-7">
        <h2 className="card-title">{text}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleCard;
