import { combineReducers } from 'redux';
import * as types from './types';

// INITIAL THEME STATE
const initialThemeState = {
	color1: '#ccc',
	color2: '#333',
	color3: '#999',
};

// THEME REDUCER
const themeReducer = (state = initialThemeState, { type, payload }) => {
	switch (type) {
		case types.UPDATE_THEME:
			return {
				...state,
				color1: payload.color1,
				color2: payload.color2,
				color3: payload.color3,
			};
		case types.RESET_THEME:
			return {
				color1: '#ccc',
				color2: '#333',
				color3: '#999',
			};
		default:
			return state;
	}
};

// COMBINED REDUCERS
const reducers = {
	theme: themeReducer,
};

export default combineReducers(reducers);
