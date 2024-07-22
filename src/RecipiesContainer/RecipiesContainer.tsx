import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import { recipiesContainer } from '../../src/styles/styles';

const RecipiesContainer: React.FC = () => {
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
