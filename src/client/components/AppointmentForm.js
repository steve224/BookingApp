import React from "react";

function AppointmentForm() {

    return(
        <div className="card mb-4">
            <div className="card-header">Book an Appointment</div>
            <div className="card-body">
                <form className="needs-validation mb-4">
                    <div className="row g-3">
                        <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>

                        <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required />
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>

                        <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Therapy</label>
                        <select className="form-select" id="country" required>
                            <option defaultValue="">Choose...</option>
                            <option>Supportive Psychotherapy</option>
                            <option>Congnitive Behavioural Therapy</option>
                            <option>Interpersonal Psychotherapy</option>
                            <option>Mindfulness Based Congnitive Therapy</option>
                            <option>Music Therapy</option>
                            <option>Art Therapy</option>
                            <option>Group Therapy</option>
                            <option>Sitota Book Club</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="state" className="form-label">Doctor</label>
                        <select className="form-select" id="state" required>
                            <option defaultValue="">Choose...</option>
                            <option>Doctor One</option>
                            <option>Doctor Two</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>
                        <button className="w-100 btn btn-primary btn-lg" type="submit">Book Appointment</button>
                    </div>
                </form>
            </div>
        </div>
            
    );
}

export default AppointmentForm;