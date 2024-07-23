import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootState, AppDispatch } from './Redux/store'; // Assuming you have a store.ts file
import './App.css';
import Home from './Pages/Home';
import AxiosRequests from './Axios/AxiosRequests';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<AxiosRequests />
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
