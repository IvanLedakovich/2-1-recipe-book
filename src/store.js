import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from './PizzaSlice'

export const store = configureStore({
	reducer: {
		pizza: pizzaReducer
	}
})
