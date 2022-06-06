import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FeaturedRestaurant from "./FeaturedRestaurant";
import FeaturedEvent from "./FeaturedEvent";

function FeaturedPost(props) {

    const featuredEvent = useSelector(state => state.Events.FeaturedEvent);
    const featuredRestaurant = useSelector(state => state.Restaurants.FeaturedRestaurant);

    return(
        <>
        {
            props.category === "Events" ? <FeaturedEvent featuredEvent={featuredEvent} />
            :   <FeaturedRestaurant featuredRestaurant={featuredRestaurant} />
        }
        </>
    );
}

export default FeaturedPost;