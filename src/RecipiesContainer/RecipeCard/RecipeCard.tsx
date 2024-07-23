import clsx from 'clsx';
import React from 'react';
import cuisineImage from '../../images/cuisineImage.svg';
import timerImage from '../../images/timerImage.svg';
import {
	cardDifficultyBigContainer,
	cookingTimeContainer,
	cookingTimeTextContainer,
	cuisineContainer,
	cuisineNameContainer,
	recipeCard,
	recipeName
} from '../../styles/styles';
import RecipeCardImage from './RecipeCardImage/RecipeCardImage';
import RecipeTags from './RecipeCardTags/RecipeCardTags';
import Difficulty from './Difficulty/Difficulty';

const RecipeCard: React.FC<{
	image;
	name;
	cookTimeMinutes;
	difficulty;
	cuisine;
	tags;
}> = ({ image, name, cookTimeMinutes, difficulty, cuisine, tags }) => {
	return (
		<>
			<div className={recipeCard}>
				<RecipeCardImage imgSrc={image} pt="65%" />
				<RecipeTags />
				<div className={recipeName}>
					<h3 className={clsx('just-me-again-down-here-small', 'w-auto', 'ml-3')}>
						{name}
					</h3>
				</div>
				<div className={cuisineContainer}>
					<img className={cuisineImage} src={cuisineImage} alt="cuisineImage" />
					<h5 className={clsx('nunito-sans-normal', 'text-2xl')}>Cuisine</h5>
					<div className={cuisineNameContainer}>
						<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#D20C0C]')}>
							{cuisine}
						</h5>
					</div>
				</div>
				<div className={cookingTimeContainer}>
					<img className={timerImage} src={timerImage} alt="timerImage" />
					<h5 className={clsx('nunito-sans-normal', 'text-2xl')}>Cooking Time</h5>
					<div className={cookingTimeTextContainer}>
						<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#244FE9]')}>
							{cookTimeMinutes}
						</h5>
					</div>
				</div>
				<div className={cardDifficultyBigContainer}>
					<Difficulty />
				</div>
			</div>
		</>
	);
};

export default RecipeCard;
