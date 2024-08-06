import clsx from 'clsx';
import React from 'react';
import { recipeTagContainer, recipeTagsContainer } from '../../styles/styles';

const RecipeCardTags: React.FC<{ tags: Array<string> }> = ({ tags }) => {
	return (
		<div className={recipeTagsContainer}>
			{tags.slice(0, 4).map((element, i) => (
				<div className={recipeTagContainer} key={i}>
					<h3 className={clsx('nunito-sans-normal', 'text-[#c65f00]')}>
						{element.substring(0, 7)}
					</h3>
				</div>
			))}
		</div>
	);
};

export default RecipeCardTags;
