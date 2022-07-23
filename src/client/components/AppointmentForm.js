import React, {useState} from "react";
import DatePicker from "react-datepicker";

function AppointmentForm(props) {

    const { selectedDate } = props;
    console.log("props for appointment", props, "chosen Date", selectedDate);

    const [newAppointment, setNewAppointment] = useState({
        FirstName: "",
        LastName: "",
        Therapy: "",
        Doctor: "",
        SelectedDate: selectedDate ? selectedDate[0] : ""
    });

    const handelTherapySelection = (e) => {
        setNewAppointment({...newAppointment, Therapy: e.target.value});
    }
    
    const handelDoctorSelection = (e) => {
        setNewAppointment({...newAppointment, Doctor: e.target.value});
    }

    const handelDateSelection = (date) => {
        setNewAppointment({...newAppointment, SelectedDate: date});
        console.log("Selected date", date);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment", newAppointment);
        props.handleAddEvent(newAppointment);
    }

    return(
        <div className="card mb-4">
            <div className="card-header">Book an Appointment</div>
            <div className="card-body">
                <form className="needs-validation mb-4">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" onChange={e => setNewAppointment({...newAppointment, FirstName: e.target.value}) } required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" onChange={e => setNewAppointment({...newAppointment, LastName: e.target.value}) } required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="country" className="form-label">Therapy</label>
                            <select className="form-select" id="country" onChange={handelTherapySelection} required>
                                <option defaultValue="">Choose...</option>
                                <option value="Supportive Psychotherapy">Supportive Psychotherapy</option>
                                <option value="Congnitive Behavioural Therapy">Congnitive Behavioural Therapy</option>
                                <option value="Interpersonal Psychotherapy">Interpersonal Psychotherapy</option>
                                <option value="Mindfulness Based Congnitive Therapy">Mindfulness Based Congnitive Therapy</option>
                                <option value="Music Therapy">Music Therapy</option>
                                <option value="Art Therapy">Art Therapy</option>
                                <option value="Group Therapy">Group Therapy</option>
                                <option value="Sitota Book Club">Sitota Book Club</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="state" className="form-label">Doctor</label>
                            <select className="form-select" id="state" onChange={handelDoctorSelection} required>
                                <option defaultValue="">Choose...</option>
                                <option value="DoctorOne">Doctor One</option>
                                <option value="DoctorTwo">Doctor Two</option>
                            </select>
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="state" className="form-label">Date</label>
                            <DatePicker 
                                showTimeSelect
                                timeFormat="HH:mm"
                                // timeIntervals={20}
                                timeCaption="time"
                                dateFormat="d, MMMM, yyyy h:mm aa"
                                onChange={handelDateSelection}
                                selected={newAppointment.SelectedDate ? newAppointment.SelectedDate :
                                     new Date(Date.now())}
                                // value={newAppointment.SelectedDate}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>    
                        <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handelSubmit}>Book Appointment</button>
                    </div>
                </form>
            </div>
        </div>
            
    );
}

export default AppointmentForm;