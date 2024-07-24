import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RecipePage from './Pages/RecipePage';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route index element={<Home />} /> */}
				<Route index element={<RecipePage id={1} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
