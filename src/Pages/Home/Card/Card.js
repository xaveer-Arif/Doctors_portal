import React from "react";
import SingleCard from "./SingleCard";
import clock from '../../../Assets/icons/clock.svg'
import marker from '../../../Assets/icons/marker.svg'
import phone from '../../../Assets/icons/phone.svg'

const cardData = [
    {
         _id: 1,
         text:"Opening Hours",
         paragraph:"Lorem Ipsum is simply dummy text of the pri",
         color:'bg-gradient-to-r from-secondary to-primary',
        //  img:"../../../Assets/icons/clock.svg"
         img:`${clock}`
    },
    {
         _id: 2,
         text:"Visit our location",
         paragraph:"Brooklyn, NY 10036, United States",
         color:'bg-gray-700',
         img:`${marker}`
         
    },
    {
         _id: 3,
         text:"Contact us now",
         paragraph:"+000 123 456789",
         color:'bg-gradient-to-r from-secondary to-primary',
         img:`${phone}`
    }
];

const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-2 sm:grid-cols-1 lg:gap-3 mx-5 sm:my-4">
        {
            cardData.map(data => <SingleCard 
                cardInfo={data}
                key={data._id}>
            </SingleCard>)
        }

    </div>
  );
};

export default Card;
