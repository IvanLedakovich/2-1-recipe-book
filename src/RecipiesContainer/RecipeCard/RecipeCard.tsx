import React from 'react';
import RecipeCardImage from './RecipeCardImage/RecipeCardImage';
import RecipeTags from './RecipeCardTags/RecipeCardTags';

const RecipeCard: React.FC = () => {
	return (
		<>
			<div className="RecipeCard">
				<RecipeCardImage
					imgSrc="https://cdn.dummyjson.com/recipe-images/1.webp"
					pt="65%"
				/>
				<div className="TagsContainer">
					<RecipeTags />
				</div>
			</div>
		</>
	);
};

export default RecipeCard;
