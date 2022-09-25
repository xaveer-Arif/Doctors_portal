import React from 'react';

const SingleServices = ({service}) => {
    const {img, name, info} = service
    return (
        <div className="card w-full bg-base-100 shadow-xl border">
  <figure className="px-10 pt-6">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{info}</p>
  </div>
</div>
    );
};

export default SingleServices;