import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fillFully } from '../redux/recipes/actionCreators';

const AxiosRequests: React.FC = () => {
	const dispatch = useDispatch();

	axios.get(`https://dummyjson.com/recipes`).then((res) => {
		dispatch(fillFully(res.data.recipes));
	});

	return <></>;
};

export default AxiosRequests;
