import React, { FC } from 'react';
import './aboutPage.styles.css';

const AboutPage: FC = () => (
	<>
		<div className={'aboutImageText'}>
			<h1>About</h1>
			<h2>Kun Avese</h2>
		</div>
		<div className={'websiteDescription'}>
			<div className={'textAndImage'}>
				<div className={'websiteFounderImage'}>
					<img src='https://images.unsplash.com/flagged/photo-1552046930-4cffbe772cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt={'Owner'}/>
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
