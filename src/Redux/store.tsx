import { configureStore } from '@reduxjs/toolkit';
import { recipes } from '../data/RecipiesData';

export const store = configureStore({
	reducer: {
		recipes: recipes.reducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
