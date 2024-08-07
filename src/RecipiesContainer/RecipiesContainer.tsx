import React from 'react';
import { useSelector } from 'react-redux';
import { recipiesContainer } from '../../src/ui/styles';
import {
	MAX_CUISINE_NAME_LENGTH,
	MAX_RECIPE_NAME_LENGTH
} from '../utils/constants';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipiesContainer: React.FC = () => {
	const recipes = useSelector((state: any) => state.recipes);

	return (
		<div className={recipiesContainer}>
			{recipes.length === 0 ? (
				<p className="mx-auto">There are no such recipes 😓</p>
			) : (
				<>
					{recipes.map((element: any) => (
						<RecipeCard
							key={element.id}
							id={element.id}
							image={element.image}
							name={element.name.substring(0, MAX_RECIPE_NAME_LENGTH)}
							cookTimeMinutes={element.cookTimeMinutes}
							difficulty={element.difficulty}
							cuisine={element.cuisine.substring(0, MAX_CUISINE_NAME_LENGTH)}
							tags={element.tags}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default RecipiesContainer;
