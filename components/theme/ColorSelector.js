import { useSelector, useDispatch } from 'react-redux';
import { updateTheme, resetTheme } from '../../redux/actions';

import styles from '../../styles/ColorSelector.module.scss';

const ColorSelector = ({ value, stateColor }) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const {
		colorPrimary,
		colorSecondary,
		colorTertiary,
		backgroundPrimary,
		backgroundSecondary,
	} = state.theme;

	const newTheme = {
		colorPrimary,
		colorSecondary,
		colorTertiary,
		backgroundPrimary,
		backgroundSecondary,
	};

	const onClick = (e) => {
		const payload = {
			...newTheme,
			[stateColor]: value,
		};

		dispatch(updateTheme(payload));
	};

	return (
		<div
			className={`${styles.colorSelector} ${styles[value]}`}
			onClick={(e) => onClick(e)}></div>
	);
};

export default ColorSelector;
