import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Event from "./Event";
import Restaurant from "./Restaurant";


function Posts(props) {

    const events = useSelector(state => state.Events.Events);
    const restaurants = useSelector(state => state.Restaurants.Restaurants);

    return(

        <div className="row">
            {
                props.category === "Events" ? 
                events.map(event => <Event key={event.name} event={event}/>)                
                : restaurants.map(restaurant => <Restaurant key={restaurant.name} restaurant={restaurant}/> )
                
            }
        </div>
    
    );
}

export default Posts;