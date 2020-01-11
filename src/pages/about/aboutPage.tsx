import React, { FC } from 'react';
import './aboutPage.styles.css';
import img from '/Users/admin/Desktop/salvation updated/src/Images/cake.jpg';

const AboutPage: FC = () => (
	<>
		<div className={'imageText'}>
			<h1>Hello</h1>
			<h2>About</h2>
		</div>
		<div className={'websiteDescription'}>
			<div className={'textAndImage'}>
				<div className={'websiteFounderImage'}>
					<img src={img} alt={'ownerImage'}/>
				</div>
				<div className={'founderDescription'}>
				<p>
					Lemon Tree Cookies is the brain child of dynamic mother-daughter duo, Liz Maci and Abby Reckard.
				</p>
				<p>
					Lemon Tree Cookies is the brain child of dynamic mother-daughter duo, Liz Maci and Abby Reckard.
						Lemon Tree Cookies is the brain child of dynamic mother-daughter duo, Liz Maci and Abby Reckard.
					</p>
				<p>
					Lemon Tree Cookies is the brain child of dynamic mother-daughter duo, Liz Maci and Abby Reckard.
					Lemon Tree Cookies is the brain child of dynamic mother-daughter duo, Liz Maci and Abby Reckard.
				</p>
				<p>
					Lemon Tree Cookies is the brain child of dynamic mother-daughter duo, Liz Maci and Abby Reckard.
					Lemon Tree Cookies is the brain child of dynamic mother-daughter duo, Liz Maci and Abby Reckard.
				</p>
				</div>

			</div>
		</div>
</>
);

export default AboutPage;
