import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipiesContainer } from '../../src/styles/styles';
import { fillInitially } from '../redux/recipes/actionCreators';
import RecipeCard from './RecipeCard/RecipeCard';

const RecipiesContainer: React.FC = () => {
	const recipes = useSelector((state) => state.recipes);

	const dispatch = useDispatch();

	React.useEffect(() => {
		axios.get(`https://dummyjson.com/recipes?limit=6&skip=0`).then((res) => {
			dispatch(fillInitially(res.data.recipes));
		});
	}, []);

	return (
		<div className={recipiesContainer}>
			{recipes.length === 0 ? (
				<p>Loading...</p>
			) : (
				<>
					{recipes.map((element) => (
						<RecipeCard
							key={element.id}
							image={element.image}
							name={element.name.substring(0, 27)}
							cookTimeMinutes={element.cookTimeMinutes}
							difficulty={element.difficulty}
							cuisine={element.cuisine.substring(0, 10)}
							tags={element.tags}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default RecipiesContainer;
