import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllRecipesAxios,
	getRecipesByDifficultyAxios,
	getSixRecipesAxios,
	getSixRecipesInitiallyAxios,
	searchRecipesAxios
} from '../axios/axios';
import bowl from '../images/bowl.svg';
import pizzaHeader from '../images/pizzaHeader.png';
import searchDefault from '../images/seachDefault.svg';
import RecipiesContainer from '../RecipiesContainer/RecipiesContainer';
import {
	fillInitially,
	loadMore,
	setCount,
	showMoreButton
} from '../redux/recipes/actionCreators';
import {
	difficultyButtonDefault,
	difficultyContainer,
	headerImage,
	headerLineLeft,
	headerLineRight,
	headerText,
	loadMoreButtonBigContainer,
	loadMoreButtonSmallContainer,
	logoContainer,
	pizzaHeaderContainer,
	pizzaHeaderImage,
	searchBarDefault,
	searchInput
} from '../styles/styles';

const Home: React.FC = () => {
	const count = useSelector((state: any) => state.recipesCount);
	const showMoreButtonState = useSelector((state: any) => state.showMoreButton);

	const dispatch = useDispatch();
	const [difficultyChosen, setDifficultyChosen] = useState(false);
	dispatch(showMoreButton(true));

	console.log(showMoreButtonState);

	const searchRecipes = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchRecipesAxios(e.target.value, dispatchFillInitially);
		dispatchShowMoreButton(e.target.value ? false : true);
	};

	const dispatchFillInitially = async (res) => {
		dispatch(fillInitially(res));
	};

	const dispatchShowMoreButton = async (boolean) => {
		dispatch(showMoreButton(boolean));
	};

	const dispatchLoadMore = async (res, isEnd: boolean) => {
		dispatch(loadMore(res));
		if (isEnd) dispatchShowMoreButton(false);
	};

	return (
		<>
			<img className={pizzaHeaderImage} src={pizzaHeader} alt="pizzaHeader" />
			<div
				className={pizzaHeaderContainer}
				onLoad={() => getSixRecipesInitiallyAxios(dispatchFillInitially)}
			>
				<div id="headerLine" className={headerLineLeft} />
				<div id="headerLine" className={headerLineRight} />
				<div className={logoContainer}>
					<img className={headerImage} src={bowl} alt="" />
					<h1 className={headerText}>Recipe Book</h1>
				</div>
			</div>

			<div className={clsx('flex', 'w-[90%]', 'ml-[5%]', 'flex-wrap')}>
				<div className={clsx('flex', 'w-[400px]', 'mt-[50px]', 'left-[3%]')}>
					<img
						className={searchBarDefault}
						src={searchDefault}
						alt="searchDefault"
					/>
					<input
						type="text"
						id="searchInput"
						name="name"
						className={searchInput}
						onChange={searchRecipes}
					></input>
				</div>

				<div className={clsx(difficultyContainer, 'm:ml-auto')}>
					<button
						className={difficultyButtonDefault}
						onClick={() => {
							setDifficultyChosen(false);
							getAllRecipesAxios(dispatchFillInitially);
							dispatchShowMoreButton(false);
						}}
					>
						<h3 className="nunito-sans-normal">All</h3>
					</button>
					<button
						className={difficultyButtonDefault}
						onClick={() => {
							setDifficultyChosen(true);
							getRecipesByDifficultyAxios('Easy', dispatchFillInitially);
							dispatchShowMoreButton(false);
						}}
					>
						<h3 className="nunito-sans-normal">Easy</h3>
					</button>
					<button
						className={difficultyButtonDefault}
						onClick={() => {
							setDifficultyChosen(true);
							getRecipesByDifficultyAxios('Medium', dispatchFillInitially);
							dispatchShowMoreButton(false);
						}}
					>
						<h3 className="nunito-sans-normal">Medium</h3>
					</button>
					<button
						className={difficultyButtonDefault}
						onClick={() => {
							setDifficultyChosen(true);
							getRecipesByDifficultyAxios('Hard', dispatchFillInitially);
							dispatchShowMoreButton(false);
						}}
					>
						<h3 className="nunito-sans-normal">Hard</h3>
					</button>
				</div>
			</div>
			<RecipiesContainer />
			<div className={loadMoreButtonBigContainer}>
				{showMoreButtonState === false ? (
					<></>
				) : (
					<div className={loadMoreButtonSmallContainer}>
						<h5
							className={clsx('just-me-again-down-here-small', 'text-5xl')}
							onClick={() => {
								if (difficultyChosen == false) {
									dispatch(setCount(count + 6));
									getSixRecipesAxios(count, dispatchLoadMore);
								}
							}}
						>
							Load more
						</h5>
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
