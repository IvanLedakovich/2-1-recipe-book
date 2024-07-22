import clsx from 'clsx';
import React from 'react';
import {
	recipeTagContainer,
	recipeTagsContainer
} from '../../../styles/styles';

const RecipeTags: React.FC = () => {
	const recipeTags: string[] = ['Pizza', 'Italian'];

	return (
		<div className={recipeTagsContainer}>
			{recipeTags.map((element) => (
				<div className={recipeTagContainer}>
					<h3 className={clsx('nunito-sans-normal', 'text-[#c65f00]')}>{element}</h3>
				</div>
			))}
		</div>
	);
};

export default RecipeTags;
