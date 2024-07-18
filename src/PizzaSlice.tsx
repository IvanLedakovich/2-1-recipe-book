import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PizzaState {
	toppings: string[];
	gluten: boolean;
}

const initialState: PizzaState = {
	toppings: ['pepperoni'],
	gluten: true
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		toggleGluten: (state) => {
			state.gluten = !state.gluten;
		},
		addTopping: (state, action: PayloadAction<string>) => {
			state.toppings = [...state.toppings, action.payload];
		}
	}
});

export const { toggleGluten, addTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
