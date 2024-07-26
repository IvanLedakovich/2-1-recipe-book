import clsx from 'clsx';
import React from 'react';
import {
	bowlContainer,
	goBackButton,
	headerLineLeftSingle,
	headerLineRightSingle,
	headerLogoContainerSingle,
	headerTextSingle,
	infoContainerSinglePage,
	infoContanerSingle,
	photoContainerSinglePage,
	recipeImageSinglePage,
	recipeNameSingle
} from '../styles/styles';

import bowl from '../images/bowlBlack.svg';
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
				</div>
			</div>
		</>
	);
};

export default RecipePage;
