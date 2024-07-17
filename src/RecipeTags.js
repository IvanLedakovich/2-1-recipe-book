const RecipeTags = ([recipeTags]) => {
	recipeTags = ['Pizza', 'Italian']

	return (
		<>
			{recipeTags.map((element) => {
				;<div className="RecipeTag">
					<h3 className="RecipeTagText">{element}</h3>
				</div>
			})}
		</>
	)
}

export default RecipeTags
