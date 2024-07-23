import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipiesContainer } from '../../src/styles/styles';
import { fillFully } from '../redux/recipes/actionCreators';
import RecipeCard from './RecipeCard/RecipeCard';
import fetchData from '../utils/fetchData';

const RecipiesContainer: React.FC = () => {
	const recipes = useSelector((state) => state.recipes);

	return (
		<div className={recipiesContainer}>
			{recipes.length === 0 ? (
				<p>Loading...</p>
			) : (
				<>
					{recipes.map((element) => {
						console.log('created');
						<RecipeCard
							key={element.id}
							image={element.image}
							name={element.name}
							cookTimeMinutes={element.cookTimeMinutes}
							difficulty={element.difficulty}
							cuisine={element.cuisine}
							tags={element.tags}
						/>;
					})}
				</>
			)}
		</div>
	);
};

export default RecipiesContainer;
