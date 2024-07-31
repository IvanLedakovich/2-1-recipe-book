import clsx from 'clsx';
import React from 'react';
import {
	recipeTagContainer,
	recipeTagsContainerSinglePage
} from '../../styles/styles';

const RecipeTagsSinglePage: React.FC<{ tags }> = (tags) => {
	return (
		<div className={recipeTagsContainerSinglePage}>
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

export default RecipeTagsSinglePage;
