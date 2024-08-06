import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipiesContainer } from '../../src/styles/styles';
import { fillInitially } from '../redux/recipes/actionCreators';
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
							name={element.name.substring(0, 23)}
							cookTimeMinutes={element.cookTimeMinutes}
							difficulty={element.difficulty}
							cuisine={element.cuisine.substring(0, 9)}
							tags={element.tags}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default RecipiesContainer;
