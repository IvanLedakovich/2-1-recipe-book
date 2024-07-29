import axios from 'axios';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bowl from '../images/bowl.svg';
import bowlReflectionBig from '../images/bowlReflectionBig.svg';
import bowlReflectionSmall from '../images/bowlReflectionSmall.svg';
import pizzaHeader from '../images/pizzaHeader.png';
import searchDefault from '../images/seachDefault.svg';
import RecipiesContainer from '../RecipiesContainer/RecipiesContainer';
import {
	fillInitially,
	loadMore,
	setCount
} from '../redux/recipes/actionCreators';
import {
	bowlContainer,
	difficultyButtonDefault,
	difficultyContainer,
	headerLineLeft,
	headerLineRight,
	headerLogoContainer,
	loadMoreButtonBigContainer,
	loadMoreButtonSmallContainer,
	pizzaHeaderContainer,
	pizzaHeaderImage,
	searchBarDefault,
	searchInput
} from '../styles/styles';

const Home: React.FC = () => {
	const count = useSelector((state) => state.recipesCount);
	const dispatch = useDispatch();
	const [difficultyChosen, setDifficultyChosen] = useState(false);

	const searchRequest = () => {
		console.log(document.getElementById('searchInput')?.innerHTML);
		axios
			.get(
				`https://dummyjson.com/recipes/search?q=${
					(document.getElementById('searchInput') as HTMLInputElement).value
				}`
			)
			.then((res) => {
				dispatch(fillInitially(res.data.recipes));
			});
	};

	return (
		<>
			<div className={pizzaHeaderContainer}>
				<div id="headerLine" className={headerLineLeft} />
				<div id="headerLine" className={headerLineRight} />
				<img className={pizzaHeaderImage} src={pizzaHeader} alt="pizzaHeader" />
				<div className={headerLogoContainer}>
					<div className={bowlContainer}>
						<img className={bowl} src={bowl} alt="bowl" />
						<img
							className={bowlReflectionBig}
							src={bowlReflectionBig}
							alt="bowlReflectionBig"
						/>
						<img
							className={bowlReflectionSmall}
							src={bowlReflectionSmall}
							alt="bowlReflectionSmall"
						/>
					</div>
					<h1 className="just-me-again-down-here-regular">Recipe Book</h1>
				</div>
			</div>

			<img className={searchBarDefault} src={searchDefault} alt="searchDefault" />
			<input
				type="text"
				id="searchInput"
				name="name"
				className={searchInput}
				onChange={searchRequest}
			></input>

			<div className={difficultyContainer}>
				<button
					className={difficultyButtonDefault}
					onClick={() => {
						setDifficultyChosen(false);
						axios.get(`https://dummyjson.com/recipes`).then((res) => {
							dispatch(fillInitially(res.data.recipes));
						});
					}}
				>
					<h3 className="nunito-sans-normal">All</h3>
				</button>
				<button
					className={difficultyButtonDefault}
					onClick={() => {
						setDifficultyChosen(true);

						axios.get(`https://dummyjson.com/recipes`).then((res) => {
							dispatch(
								fillInitially(
									res.data.recipes.filter((recipe) => recipe.difficulty === 'Easy')
								)
							);
						});
					}}
				>
					<h3 className="nunito-sans-normal">Easy</h3>
				</button>
				<button
					className={difficultyButtonDefault}
					onClick={() => {
						setDifficultyChosen(true);
						axios.get(`https://dummyjson.com/recipes`).then((res) => {
							dispatch(
								fillInitially(
									res.data.recipes.filter((recipe) => recipe.difficulty === 'Medium')
								)
							);
						});
					}}
				>
					<h3 className="nunito-sans-normal">Medium</h3>
				</button>
				<button
					className={difficultyButtonDefault}
					onClick={() => {
						setDifficultyChosen(true);
						axios.get(`https://dummyjson.com/recipes`).then((res) => {
							dispatch(
								fillInitially(
									res.data.recipes.filter((recipe) => recipe.difficulty === 'Hard')
								)
							);
						});
					}}
				>
					<h3 className="nunito-sans-normal">Hard</h3>
				</button>
			</div>
			<RecipiesContainer />
			<div className={loadMoreButtonBigContainer}>
				<div className={loadMoreButtonSmallContainer}>
					<h5
						className={clsx('just-me-again-down-here-small', 'text-5xl')}
						onClick={() => {
							console.log(difficultyChosen);
							if (difficultyChosen == false) {
								dispatch(setCount(count + 6));
								axios
									.get(`https://dummyjson.com/recipes?limit=6&skip=${count}`)
									.then((res) => {
										dispatch(loadMore(res.data.recipes));
									});
							}
						}}
					>
						Load more
					</h5>
				</div>
			</div>
		</>
	);
};

export default Home;
