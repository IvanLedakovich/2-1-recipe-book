import * as a from './actionTypes';

export const fillFully = (recipes) => {
	return {
		type: a.FILL_FULLY,
		payload: recipes
	};
};
