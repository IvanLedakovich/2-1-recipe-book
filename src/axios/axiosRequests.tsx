import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fillFully } from '../redux/recipes/actionCreators';

export const searchRecipe = () => {
	axios.get(`https://dummyjson.com/recipes`).then((res) => {
		dispatch(fillFully(res.data.recipes));
	});
};
