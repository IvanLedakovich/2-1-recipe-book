import RecipeCardImage from './RecipeCardImage'
import RecipeTags from './RecipeTags'

const RecipeCard = () => {
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
	)
}

export default RecipeCard
