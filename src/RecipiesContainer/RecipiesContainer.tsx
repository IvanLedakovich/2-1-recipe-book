import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipiesContainer: React.FC = () => {
	return (
		<div className="RecipiesContainer">
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
