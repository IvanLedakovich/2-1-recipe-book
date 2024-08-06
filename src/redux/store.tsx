import { configureStore } from '@reduxjs/toolkit';
import {
	recipesCountReducer,
	recipesReducer,
	showMoreButtonReducer
} from './recipes/reducer';

const store = configureStore({
	reducer: {
		recipes: recipesReducer,
		recipesCount: recipesCountReducer,
		showMoreButton: showMoreButtonReducer
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
