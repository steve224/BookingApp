import React from "react";
import Events from "./Events";
import FeaturedEvent from "./FeaturedEvent";
import SideWidget from "./SideWidget";

function Main() {
    return(
        <div className="container py-5 mb-4">
            <div className="row">
                <div className="col-lg-8">
                    <FeaturedEvent />
                    <Events />
                </div>
                <SideWidget />
            </div>
        </div>            
    );
}

export default Main;