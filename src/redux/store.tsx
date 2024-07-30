import { configureStore } from '@reduxjs/toolkit';
import { recipesReducer, recipesCountReducer } from './recipes/reducer';

const store = configureStore({
	reducer: {
		recipes: recipesReducer,
		recipesCount: recipesCountReducer
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
