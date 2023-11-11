import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetTheme } from '../../redux/actions';
import ColorSelector from './ColorSelector';

import styles from '../../styles/ThemeMenu.module.scss';

const ThemeMenu = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const {
		colorPrimary,
		colorSecondary,
		colorTertiary,
		backgroundPrimary,
		backgroundSecondary,
	} = state.theme;

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
				<div
					className={styles.menuWindow}
					style={{ backgroundColor: backgroundSecondary }}>
					<button
						className={styles.closeMenu}
						style={{
							color: colorPrimary,
							backgroundColor: backgroundPrimary,
							outline: colorPrimary,
						}}
						onClick={() => {
							setOpen(false);
						}}>
						&times;
					</button>
					<div className={styles.menuSection}>
						<h1>Color 1</h1>
						<div className={styles.palette}>
							<ColorSelector
								stateColor='colorPrimary'
								value='red'
							/>
							<ColorSelector
								stateColor='colorPrimary'
								value='green'
							/>
							<ColorSelector
								stateColor='colorPrimary'
								value='blue'
							/>
							<ColorSelector
								stateColor='colorPrimary'
								value='yellow'
							/>
							<ColorSelector
								stateColor='colorPrimary'
								value='pink'
							/>
						</div>
					</div>

					<div className={styles.menuSection}>
						<h1>Color 2</h1>
						<div className={styles.palette}>
							<ColorSelector
								stateColor='colorSecondary'
								value='red'
							/>
							<ColorSelector
								stateColor='colorSecondary'
								value='green'
							/>
							<ColorSelector
								stateColor='colorSecondary'
								value='blue'
							/>
							<ColorSelector
								stateColor='colorSecondary'
								value='yellow'
							/>
							<ColorSelector
								stateColor='colorSecondary'
								value='pink'
							/>
						</div>
					</div>

					<div className={styles.menuSection}>
						<h1>Color 3</h1>
						<div className={styles.palette}>
							<ColorSelector
								stateColor='colorTertiary'
								value='red'
							/>
							<ColorSelector
								stateColor='colorTertiary'
								value='green'
							/>
							<ColorSelector
								stateColor='colorTertiary'
								value='blue'
							/>
							<ColorSelector
								stateColor='colorTertiary'
								value='yellow'
							/>
							<ColorSelector
								stateColor='colorTertiary'
								value='pink'
							/>
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
