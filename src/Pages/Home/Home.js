import React from 'react';
import Reviews from '../Reviews/Reviews';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import DescribeCard from './DescribeCard/DescribeCard';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Card/>
            <Services/>
            <DescribeCard/>
            <AppointmentBanner/>
            <Reviews/>
        </div>
    );
};

export default Home;