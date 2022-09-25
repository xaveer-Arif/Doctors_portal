import React from 'react';
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';
import doctor from "../../../Assets/images/doctor.png";
import appointment from "../../../Assets/images/appointment.png"

const AppointmentBanner = () => {
    return (
        <div 
            style={{background:`url(${appointment})`}}
        className=' lg:mt-20 flex lg:flex-row justify-center items-center'>
            <div className="basis-1/2 hidden lg:block">
                <img className='mt-[-160px]' src={doctor} alt="" />
            </div>
            <div className="lg:basis-1/2 m-5 text-white">
                <h4 className='text-xl text-secondary my-4 '>Appointment</h4>
                <h1 className='text-4xl mb-4 '>Make an appointment Today</h1>
                <p className='mb-4 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default AppointmentBanner;