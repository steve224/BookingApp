import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
    {
        title: "test eventOne",
        start: new Date(2022, 5, 30),
        end: new Date(2022, 6, 1)
    },
    {
        title: "test eventTwo",
        start: new Date(2022, 6, 3),
        end: new Date(2022, 6, 10)
    },
    {   
        title: "test eventThree",
        start: new Date(2022, 6, 15),
        end: new Date(2022, 6, 18)
    }
]


function CalendarComponent(){

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(events);

    const handelAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
    }


    return(
        <div className="card mb-4">
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            />
        </div>
      );
    
}

export default CalendarComponent;