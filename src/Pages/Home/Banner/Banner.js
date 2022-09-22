import React from "react";
import "./Banner.css";
import BannerChair from "../../../Assets/images/chair.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="bg hero h-min pt-20 pb-20">
      <div className="p-0 hero-content flex-col lg:flex-row-reverse ">
        <div className="sm:w-full  lg:w-10/12">
          <img src={BannerChair} className="max-w-12  rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
