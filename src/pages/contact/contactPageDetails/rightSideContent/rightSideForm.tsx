import React, {FC, useState} from 'react';
import './rightSideForm.styles.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DateInput from './dateInput/dateInput';


const RightSideForm: FC = () => {
  const [value, setValue] = useState();
  return (
    <>
      <div className={'rightSideDetails'}>
        <h1>ORDER FORM</h1>
        <p><span id={'boldWord'}>Note</span>: Our baker/decorator, Liz, is hard at work recovering from shoulder surgery and prepping for a knee replacement, so we’re not able to take any orders right now. Thank you for understanding, and check back in spring 2020!</p>
        <div className={'orderForm'}>
          <form>
            <label>
              Name<br/>
              <input type="text" name="name" required placeholder="First Name"/>
              <input type="text" name="name" required placeholder="Last Name"/>
            </label>
            <label>
              EMAIL<br/>
              <input type="text" name="Email" required placeholder="Email"/>
            </label>
            <label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}/>
            </label>
            <label>
              Number Of Cookies<br/>
              <input type="text" name="Number" required placeholder="Number of Cookies"/>
            </label>
            <label>
              <DateInput />
            </label>
            <label>
              {/*<input*/}
              {/*  type="text"*/}
              {/*  value={value}*/}
              {/*  onChange={handleChange}*/}
              {/*/>*/}
            </label>
            <input type="submit" value="Submit Form" className={'contactPageFormSubmit'}/>
          </form>
        </div>
      </div>
    </>
  );
};

export default RightSideForm;
