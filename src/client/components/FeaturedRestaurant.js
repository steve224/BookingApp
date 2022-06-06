import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function FeaturedRestaurant(props) {

    const { name, description } = props.featuredRestaurant;

    return(
        <div className="card mb-4">
            <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div className="card-body">
                <div className="small text-muted">January 1, 2022</div>
                <h2 className="card-title">Featured: {name}</h2>
                {/* <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p> */}
                <p className="card-text">Featured Event description: {description}</p>
                <Link to="/EventDetails"><button className="btn btn-primary">Read more →</button></Link>
            </div>
        </div> 
    );
}

export default FeaturedRestaurant;