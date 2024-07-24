import clsx from 'clsx';
import React from 'react';
import { recipeTagContainer, recipeTagsContainer } from '../../styles/styles';

const RecipeTags: React.FC<{ tags }> = (tags) => {
	// const recipeTags: string[] = ['Pizza', 'Italian'];
	// let tagsTrimmed = tags.tags.slice[4];

	return (
		<div className={recipeTagsContainer}>
			{tags.tags.slice(0, 4).map((element, i) => (
				<div className={recipeTagContainer} key={i}>
					<h3 className={clsx('nunito-sans-normal', 'text-[#c65f00]')}>
						{element.substring(0, 11)}
					</h3>
				</div>
			))}
		</div>
	);
};

export default RecipeTags;
