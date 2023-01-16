import { useState } from 'react';
import Calendar from 'react-calendar';

import './dateCalendar.css';

function DateCalendar() {
    const [date, setDate] = useState(new Date());
  
    return (
      <div className='app'>
        <div className='calendar-container'>
          <Calendar locale="en-EN" onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    );
  }
  
  export default DateCalendar;