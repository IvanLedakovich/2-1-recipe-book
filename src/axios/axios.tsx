import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://dummyjson.com',
	headers: {
		'Content-Type': 'application/json'
	}
});

const handleRequestError = (error: any) => {
	console.error('Ошибка запроса:', error);
	throw error;
};

export const searchRecipesAxios = (searchTerm: string) => {
	axios
		.get(`https://dummyjson.com/recipes/search?q=${searchTerm}`)

		.then((res) => {
			return res.data.recipes;
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const getAllRecipesAxios = () => {
	axios
		.get(`https://dummyjson.com/recipes`)
		.then((res) => {
			return res.data.recipes;
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const getRecipesByDifficultyAxios = (difficulty: string) => {
	axios
		.get(`https://dummyjson.com/recipes`)
		.then((res) => {
			return res.data.recipes.filter((recipe) => recipe.difficulty === difficulty);
		})
		.catch((error) => {
			handleRequestError(error);
		});
};

export const getSixRecipesAxios = (count: number) => {
	axios
		.get(`https://dummyjson.com/recipes?limit=6&skip=${count}`)
		.then((res) => {
			return res.data.recipes;
		})
		.catch((error) => {
			handleRequestError(error);
		});
};
