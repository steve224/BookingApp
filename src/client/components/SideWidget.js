import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function SideWidget(props) {

    // const [selectedCategory, setSelectedCategory] = useState(props.category);
    
    const handleOnClick = (e) => {

        e.preventDefault();

        // setSelectedCategory(e.target.name);
        // console.log(selectedCategory, "selected", e.target.name);
        props.handleOnCategoryChange(e.target.name);

    }

    return(
        <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><Link to="/" name="Restaurants" onClick={handleOnClick}>Restaurants</Link></li>
                                        <li><Link to="/" name="Hotels" onClick={handleOnClick}>Hotels</Link></li>
                                        <li><Link to="/" name="Cinemas" onClick={handleOnClick}>Cinemas</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><Link to="/" name="Sites" onClick={handleOnClick}>Sites</Link></li>
                                        <li><Link to="/" name="Events" onClick={handleOnClick}>Events</Link></li>
                                        <li><Link to="/" name="Cafes" onClick={handleOnClick}>Cafes</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Side Widget</div>
                        <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
    );
}

export default SideWidget;