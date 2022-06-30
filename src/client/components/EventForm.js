import React, { useState } from "react";

function EventForm() {

    const [formInputs, setFormInputs] = useState({});
    const [errors, setErrors] = useState({
        nameError: "",
        dateError: "",
        startTimeError: "",
        endTimeError: "",
        locationError: "",
        descriptionError: "",
        imageError: ""
    });

    const handelChange = (e) => {

        const target = e.target;
        const name = e.target.name;
        const value = target.type === 'file' ? target.files[0] : target.value;
    
        setFormInputs({
            ...formInputs,
            [name]: value
        });

    }

    const validateForm = (formInputs) => {
        
        const nameRegex = new RegExp(/^(?!\s)[a-zA-Z][\\s\][a-zA-Z]/);
        // const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const formErrors = {};

        if(!formInputs.name || !nameRegex.test(formInputs.name))  
            formErrors.nameError = "Pls enter name";
        if(!formInputs.date)
            formErrors.dateError = "Pls choose date";
        if(!formInputs.startTime)
            formErrors.startTimeError = "Pls set start time";
        if(!formInputs.endTime)
            formErrors.endTimeError = "Pls set end time";
        if(!formInputs.location)
            formErrors.locationError = "Pls enter location";
        if(!formInputs.description)
            formErrors.descriptionError = "Pls enter description";
        if(!formInputs.image)
            formErrors.imageError = "Pls choose an image";
        
        return formErrors;

    }

    const handelSubmit = (e) => {
        e.preventDefault();

        // const formValues = {name, date, startTime, endTime, location, description};
        let formData = new FormData();
        const formErrors = validateForm(formInputs);
        // console.log("FormErrors", formErrors);

        if(formErrors) {
            setErrors(formErrors);
        } else {
            console.log("passed");
            formData.append("data", formInputs);
            e.target.reset();        
            
        }
        // formData.append("data", formInputs);
        // e.target.reset();        
        // console.log("passed");
        
    }

    return(
        <div className="container p-3">
            {/* <div className="row"> */}
                <div className="col-lg-6 mx-auto">
                    <div className="card">
                        <form className="card-body" onSubmit={handelSubmit}>
                            <div className="row p-1">
                                <label>Event Name</label>
                                <input type="text" name="name" onChange={handelChange} />
                                {errors.nameError !== "" ? <span className="text-danger">{errors.nameError}</span>
                                : null
                                }
                            </div>
                            <div className="row p-1">
                                <label>Event Date</label>
                                <input type="date" name="date" onChange={handelChange} />
                                {errors.dateError !== "" ? <span className="text-danger">{errors.dateError}</span>
                                : null 
                                }
                            </div>
                            <div className="row p-1">
                                <label>Event Start time</label>
                                <input type="time" name="startTime" onChange={handelChange} />
                                {errors.startTimeError !== "" ? <span className="text-danger">{errors.startTimeError}</span>
                                : null 
                                }
                            </div>
                            <div className="row p-1">
                                <label>Event End time</label>
                                <input type="time" name="endTime" onChange={handelChange} />
                                {errors.endTimeError !== "" ? <span className="text-danger">{errors.endTimeError}</span>
                                : null 
                                }
                            </div>
                            <div className="row p-1">
                                <label>Event Location</label>
                                <input type="text" name="location" onChange={handelChange} />
                                {errors.locationError !== "" ? <span className="text-danger">{errors.locationError}</span>
                                : null 
                                }
                            </div>
                            <div className="row p-1">
                                <label>Event Description</label>
                                <textarea type="textarea" name="description" onChange={handelChange} rows="4"  />
                                {errors.descriptionError !== "" ? <span className="text-danger">{errors.descriptionError}</span>
                                : null 
                                }
                            </div>
                            <div className="row p-1">
                                <label>Choose Image for Event</label>
                                <input type="file" name="image" onChange={handelChange} />
                                {errors.imageError !== "" ? <span className="text-danger">{errors.imageError}</span>
                                : null 
                                }
                            </div>
                            <div className="row p-1">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            {/* </div> */}
        </div>
    );
}

export default EventForm;