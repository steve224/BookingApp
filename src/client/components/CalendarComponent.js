import React, {useEffect, useState} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
// import AppointmentForm from './AppointmentForm'
import EventModal from './EventModal'
import AppointmentForm from './AppointmentForm'
import { useSelector } from 'react-redux'
import { update_appointments } from '../Actions/AppointmentActions'
import { useDispatch } from 'react-redux'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function CalendarComponent(){

    const dispacth = useDispatch();

    const [newEvent, setNewEvent] = useState({});
    const allEvents = useSelector(state => state.Appointments.Appointments);

    const [selectedEvent, setSelectedEvent] = useState({});
    // const [modalState, setModalState] = useState(false);
    const [selectedDate, setSelectedDate] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddEvent = (event) => {
        setNewEvent(event);
        // dispacth(update_appointments(newEvent));
        console.log("added appointment", newEvent);
    }

    // useEffect(() => {
        // update_appointments(newEvent);
    // }, [newEvent]);
 
    const handleSelectedEvent = (event) => {
        handleShow();
        setSelectedEvent({title: event.title, start: event.start, end: event.end});
        console.log("Selected calendar date", event);
    }

    const handleSlotSelection = ({start, end}) => {
        handleShow();
        setSelectedDate([start, end]);
        console.log("onSlot Selected", start, end);
    }
 

    return(
        <>
        { Object.keys(selectedEvent).length != 0 ? <EventModal showModal={show} selectedEvent={selectedEvent} handleClose={handleClose}/>
            : selectedDate.length != 0 ? <AppointmentForm selectedDate={selectedDate} handleAddEvent={handleAddEvent}/> :
            // <div className="card mb-4">
            //     {/* {selectedEvent && <Modal />} */}
            //     {/* { Object.keys(selectedEvent).length != 0 ? <EventModal showModal={show} selectedEvent={selectedEvent} handleClose={handleClose}/>
            //     : selectedDate.length != 0 ? <AppointmentForm selectedDate={selectedDate}/> : null
            //     } */}
            //     <Calendar
            //     selectable
            //     localizer={localizer}
            //     events={allEvents}
            //     defaultDate={new Date()}
            //     // timeslots={10}
            //     defaultView="month"
            //     startAccessor="start"
            //     endAccessor="end"
            //     onSelectEvent={handleSelectedEvent}
            //     onSelectSlot={handleSlotSelection}
            //     // onNavigate={date => {
            //     //     setSelectedDate({ selectedDate: date });
            //     //   }}
            //     style={{ height: 700 }}
            //     />
            // </div>
            null
        }
        <div className="card mb-4">
                {/* {selectedEvent && <Modal />} */}
                {/* { Object.keys(selectedEvent).length != 0 ? <EventModal showModal={show} selectedEvent={selectedEvent} handleClose={handleClose}/>
                : selectedDate.length != 0 ? <AppointmentForm selectedDate={selectedDate}/> : null
                } */}
                <Calendar
                selectable
                localizer={localizer}
                events={allEvents}
                defaultDate={new Date()}
                // timeslots={10}
                defaultView="month"
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={handleSelectedEvent}
                onSelectSlot={handleSlotSelection}
                // onNavigate={date => {
                //     setSelectedDate({ selectedDate: date });
                //   }}
                style={{ height: 700 }}
                />
        </div>
        </>
      );
    
}

export default CalendarComponent;