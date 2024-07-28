import clsx from 'clsx';
import React from 'react';
import {
	bowlContainer,
	cookingTimeTextContainer,
	cuisineNameContainer,
	goBackButton,
	headerLineLeftSingle,
	headerLineRightSingle,
	headerLogoContainerSingle,
	headerTextSingle,
	infoContainerSinglePage,
	infoContanerSingle,
	parameterName,
	parametersContainer,
	parameterSinglePage,
	photoContainerSinglePage,
	recipeImageSinglePage,
	recipeNameSingle
} from '../styles/styles';

import Servings from '../components/Servings';
import bowl from '../images/bowlBlack.svg';
import cuisineImage from '../images/cuisineImage.svg';
import difficulty from '../images/difficulty.svg';
import servingPlate from '../images/servingPlate.svg';
import timerImage from '../images/timerImage.svg';
import DifficultyParameterSingle from '../RecipiesContainer/RecipeCard/Difficulty/DifficultyParameterSingle';
import RecipeTagsSinglePage from '../RecipiesContainer/RecipeCard/RecipeCardTagsSinglePage';

const RecipePage: React.FC<{ id }> = (id) => {
	return (
		<>
			<div
				className={clsx(
					'mt-[50px]',
					'w-[100%]',
					'h-[100px]',
					'grid',
					'items-center'
				)}
			>
				<button className={clsx(goBackButton, 'scale-1')}>Go back</button>

				<div id="headerLine" className={headerLineLeftSingle} />
				<div id="headerLine" className={headerLineRightSingle} />
				<div className={headerLogoContainerSingle}>
					<div className={bowlContainer}>
						<img className={bowl} src={bowl} alt="bowl" />
					</div>
					<h2 className={headerTextSingle}>Recipe Book</h2>
				</div>
			</div>
			<div className={infoContanerSingle}>
				<div className={photoContainerSinglePage}>
					<img
						className={recipeImageSinglePage}
						src="https://cdn.dummyjson.com/recipe-images/1.webp"
						alt="bowl"
					/>
				</div>
				<div className={infoContainerSinglePage}>
					<RecipeTagsSinglePage tags={['italian', 'pizza']} />
					<h1 className={clsx(recipeNameSingle, 'text-6xl')}>
						Classic Margherita Pizza
					</h1>
					<div className={parametersContainer}>
						<div className={parameterSinglePage}>
							<img src={difficulty} />
							<p className={parameterName}>Level</p>
							<DifficultyParameterSingle difficulty={'Medium'} />
						</div>
						<div className={parameterSinglePage}>
							<img src={servingPlate} />
							<p className={parameterName}>Servings</p>
							<Servings servings={'4'} />
						</div>
						<div className={parameterSinglePage}>
							<img src={cuisineImage} />
							<p className={parameterName}>Cuisine</p>
							<div className={cuisineNameContainer}>
								<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#D20C0C]')}>
									{'Italian'}
								</h5>
							</div>
						</div>
						<div className={parameterSinglePage}>
							<img src={timerImage} />
							<p className={parameterName}>Cooking Time</p>
							<div className={cookingTimeTextContainer}>
								<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#244FE9]')}>
									{'30 min'}
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={clsx(
					'border-[1.5px]',
					'border-solid',
					'border-[#000000]',
					'w-[45%]',
					'h-[80%]',
					'ml-[3%]'
				)}
			></div>
		</>
	);
};

export default RecipePage;
