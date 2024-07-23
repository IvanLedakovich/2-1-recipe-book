import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	recipes: []
};

export const recipes = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		fillFully: (state, action) => {
			state.recipes = action.payload;
		}
	}
});

export const { fillFully } = recipes.actions;

export default recipes.reducer;

let recipesS;

fetch('https://dummyjson.com/recipes')
	.then((res) => res.json())
	.then((res) => {
		recipesS = res.recipes;
		console.log(recipesS);
		console.log('aye');
	});
