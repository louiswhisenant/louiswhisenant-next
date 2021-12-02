import * as types from './types';

// UPDATE THEME
export const updateTheme = (payload) => (dispatch) => {
	dispatch({
		type: types.UPDATE_THEME,
		payload,
	});

	console.log(payload);
};

// RESET THEME
export const resetTheme = () => (dispatch) => {
	dispatch({
		type: types.RESET_THEME,
	});
};
