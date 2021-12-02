import Head from 'next/head';
import styles from '../styles/Portfolio.module.scss';
import { useSelector } from 'react-redux';

import NavigationMenu from '../components/NavigationMenu';
import ThemeMenu from '../components/ThemeMenu';

const Portfolio = () => {
	const state = useSelector((state) => state);
	const { color1, color2, color3 } = state.theme;

	const { canvas, splash, title, line } = styles;

	return (
		<div className={canvas}>
			<Head>
				<title>Louis Whisenant</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<NavigationMenu />
			<ThemeMenu />

			<div className={splash}>
				<h1 className={title} style={{ color: color1 }}>
					Louis Whisenant
				</h1>
				<hr className={line} />
				<h2 className={title}>Web Developer</h2>

				<div>{color1}</div>
				<div>{color2}</div>
				<div>{color3}</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

export default Portfolio;