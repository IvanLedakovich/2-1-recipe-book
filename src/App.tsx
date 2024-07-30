import React from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter,
	Route,
	Routes,
	useSearchParams
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import RecipePage from './Pages/RecipePage';

function App(): JSX.Element {
	const recipes = useSelector((state) => state.recipes);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				{recipes.map((route, index) => (
					<Route key={index} path="/recipes/:id" element={<RecipePage />} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
