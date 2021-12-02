import { useSelector, useDispatch } from 'react-redux';
import { updateTheme, resetTheme } from '../../redux/actions';

import styles from '../../styles/ColorSelector.module.scss';

const ColorSelector = ({ value, stateColor }) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const { color1, color2, color3 } = state.theme;

	const newTheme = {
		color1,
		color2,
		color3,
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
