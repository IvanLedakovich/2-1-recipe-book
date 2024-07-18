import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootState, AppDispatch } from './Redux/store'; // Assuming you have a store.ts file
import './App.css';
import Home from './Pages/Home';

function App(): JSX.Element {
	const pizza = useSelector((state: RootState) => state.pizza);
	const dispatch: AppDispatch = useDispatch();

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// Redux Example

/*
<>
  <h1>Pizza</h1>

  {pizza.toppings.map((topping: string) => (
    <div key={topping}>{topping}</div>
  ))}

  <button onClick={() => dispatch(addTopping('pepperoni'))}>
    Add Pepperoni
  </button>
</>
*/
