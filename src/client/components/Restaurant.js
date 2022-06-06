import React from "react";
import { Link } from "react-router-dom";

function Restaurant(props){

    const {name, description} = props.restaurant;
    // console.log("Restaurant props", props);

    return(
        <div className="col-lg-6">
            <div className="card mb-4">
                <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                <div className="card-body">
                    <div className="small text-muted">January 1, 2022</div>
                    <h2 className="card-title h4">Event Name: {name}</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <p className="card-text">Event Description: {description}</p>
                    <Link to="/EventDetails"><button className="btn btn-primary">Read more →</button></Link>
                </div>
            </div>
        </div> 
    );
}

export default Restaurant;