import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme, resetTheme } from '../redux/actions';

const ThemeMenu = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const { color1, color2, color3 } = state.theme;

	const [open, setOpen] = useState(false);
	const [newTheme, setNewTheme] = useState({
		color1,
		color2,
		color3,
	});

	const onChange = (e) => {
		setNewTheme({ ...newTheme, [e.target.name]: e.target.value });
	};

	const onSave = () => {
		const payload = {
			color1: newTheme.color1,
			color2: newTheme.color2,
			color3: newTheme.color3,
		};

		dispatch(updateTheme(payload));
	};

	return (
		<Fragment>
			<button
				className='modal-trigger'
				onClick={() => {
					setOpen(!open);
				}}>
				Edit Theme
			</button>

			{open && (
				<div className='modal-window'>
					<input
						type='text'
						name='color1'
						value={newTheme.color1}
						onChange={(e) => onChange(e)}
					/>
					<input
						type='text'
						name='color2'
						value={newTheme.color2}
						onChange={(e) => onChange(e)}
					/>
					<input
						type='text'
						name='color3'
						value={newTheme.color3}
						onChange={(e) => onChange(e)}
					/>
					<button className='save-theme' onClick={onSave}>
						Save Theme
					</button>
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
