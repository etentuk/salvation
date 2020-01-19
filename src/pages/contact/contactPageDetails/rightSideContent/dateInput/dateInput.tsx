import React, {FC, useState} from 'react';
import './dateInput.styles.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const DateInput: FC = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date) => setDate(date);

  return (
    <>
      <label>
        PICK UP/DELIVERY<br/>
        <DatePicker
          onChange={onChange}
          selected={date}
        /> </label>
    </>
  );
};

export default DateInput;
