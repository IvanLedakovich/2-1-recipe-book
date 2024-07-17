import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
	const pizza = useSelector((state) => state.pizza);
	const dispatch = useDispatch();

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

//Redux Example

{
	/* <> */
}

{
	/* <h1>Pizza</h1>

    {pizza.toppings.map((topping) => (
     <div key={topping}>{topping}</div>
    ))}

    <button onClick={() => dispatch(addTopping('pepperoni'))}>
     Add Pepperoni
    </button>
   </> */
}
