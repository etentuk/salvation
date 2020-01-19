import React, { FC } from 'react';
import './contactPageDetails.styles.css';
import LeftSideContent from './leftSideContent/leftSideContent';
import RightSideForm from './rightSideContent/rightSideForm';

const ContactPageDetails: FC = () => (
  <>
    <div className={'contactPageContent'}>
      <div className={'contentBox'}>
        <div className={'leftHalfContent'}>
          <LeftSideContent />
        </div>
        <div className={'rightHalfContent'}>
          <RightSideForm />
        </div>
      </div>
    </div>
  </>
);

export default ContactPageDetails;
