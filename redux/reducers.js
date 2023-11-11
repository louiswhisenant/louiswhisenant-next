import { combineReducers } from 'redux';
import * as types from './types';

// INITIAL THEME STATE
const initialThemeState = {
	colorPrimary: '#ccc',
	colorSecondary: '#333',
	colorTertiary: '#999',
	backgroundPrimary: '#333',
	backgroundSecondary: '#555',
};

// THEME REDUCER
const themeReducer = (state = initialThemeState, { type, payload }) => {
	switch (type) {
		case types.UPDATE_THEME:
			return {
				...state,
				colorPrimary: payload.colorPrimary,
				colorSecondary: payload.colorSecondary,
				colorTertiary: payload.colorTertiary,
				backgroundPrimary: payload.backgroundPrimary,
				backgroundSecondary: payload.backgroundSecondary,
			};
		case types.RESET_THEME:
			return {
				colorPrimary: '#ccc',
				colorSecondary: '#333',
				colorTertiary: '#999',
				backgroundPrimary: '#333',
				backgroundSecondary: '#555',
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
