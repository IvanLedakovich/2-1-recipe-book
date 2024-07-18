import React from 'react';

const RecipeTags: React.FC = () => {
	const recipeTags: string[] = ['Pizza', 'Italian'];

	return (
		<>
			{recipeTags.map((element) => (
				<div className="RecipeTag">
					<h3 className="RecipeTagText">{element}</h3>
				</div>
			))}
		</>
	);
};

export default RecipeTags;
