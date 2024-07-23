import React from 'react';
import { useSelector } from 'react-redux';
import { recipiesContainer } from '../../src/styles/styles';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipiesContainer: React.FC = () => {
	let recipes = useSelector((state) => state.recipesData);

	return (
		<div className={recipiesContainer}>
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
		</div>
	);
};

export default RecipiesContainer;
