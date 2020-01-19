import React, { FC } from 'react';
import img from '../../Images/cake.jpg';
import './contactPage.styles.css';
import ContactPageDetails from './contactPageDetails/contactPageDetails';


const ContactPage: FC = () => (
	<>
		<div className={'contactPictureText'}>
			<h1>A line to reach us With</h1>
			<h2>Contact</h2>
		</div>
			<ContactPageDetails />
	</>
);

export default ContactPage;
