import React, { useEffect, useState } from "react";

import Posts from "./Posts";
import FeaturedPost from "./FeaturedPost";
import SideWidget from "./SideWidget";
import CalendarComponent from "./CalendarComponent";
import AppointmentForm from "./AppointmentForm";


function Main(props) {

    const [category, setCategory] = useState("Events");
    // console.log("Main category", category);

    const handleOnCategoryChange = (name) => {

        setCategory(name);
        // console.log("onClick Selected Category & props", category, props);

    }

    return(
        <>
        <div className="container py-5 mb-4">
            <div className="row">
                <div className="col-lg-7">
                    {/* <FeaturedPost category={category} /> */}
                    <CalendarComponent />
                    {/* <AppointmentForm /> */}
                    {/* <Posts category={category} /> */}
                </div>
                <SideWidget handleOnCategoryChange={handleOnCategoryChange} category={category}/>
            </div>
        </div>
        </>
    );
}

export default Main;