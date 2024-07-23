import * as a from './actionTypes';

const initialState = [];

const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case a.FILL_FULLY:
			return [action.payload];

		default:
			return state;
	}
};

export default recipesReducer;
