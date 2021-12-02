import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetTheme } from '../../redux/actions';
import ColorSelector from './ColorSelector';

import styles from '../../styles/ThemeMenu.module.scss';

const ThemeMenu = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const { color1, color2, color3 } = state.theme;

	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<button
				className={styles.menuTrigger}
				onClick={() => {
					setOpen(!open);
				}}>
				Edit Theme
			</button>

			{open && (
				<div className={styles.menuWindow}>
					<button
						className={styles.closeMenu}
						onClick={() => {
							setOpen(false);
						}}>
						&times;
					</button>
					<div className={styles.menuSection}>
						<h1>Color 1</h1>
						<div className={styles.palette}>
							<ColorSelector stateColor='color1' value='red' />
							<ColorSelector stateColor='color1' value='green' />
							<ColorSelector stateColor='color1' value='blue' />
							<ColorSelector stateColor='color1' value='yellow' />
							<ColorSelector stateColor='color1' value='pink' />
						</div>
					</div>

					<div className={styles.menuSection}>
						<h1>Color 2</h1>
						<div className={styles.palette}>
							<ColorSelector stateColor='color2' value='red' />
							<ColorSelector stateColor='color2' value='green' />
							<ColorSelector stateColor='color2' value='blue' />
							<ColorSelector stateColor='color2' value='yellow' />
							<ColorSelector stateColor='color2' value='pink' />
						</div>
					</div>

					<div className={styles.menuSection}>
						<h1>Color 3</h1>
						<div className={styles.palette}>
							<ColorSelector stateColor='color3' value='red' />
							<ColorSelector stateColor='color3' value='green' />
							<ColorSelector stateColor='color3' value='blue' />
							<ColorSelector stateColor='color3' value='yellow' />
							<ColorSelector stateColor='color3' value='pink' />
						</div>
					</div>
					<button
						className='reset-theme'
						onClick={() => {
							dispatch(resetTheme());
						}}>
						Reset Theme
					</button>
				</div>
			)}
		</Fragment>
	);
};

export default ThemeMenu;
