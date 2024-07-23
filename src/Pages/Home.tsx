import clsx from 'clsx';
import React from 'react';
import bowl from '../images/bowl.svg';
import bowlReflectionBig from '../images/bowlReflectionBig.svg';
import bowlReflectionSmall from '../images/bowlReflectionSmall.svg';
import pizzaHeader from '../images/pizzaHeader.png';
import searchDefault from '../images/seachDefault.svg';
import RecipiesContainer from '../RecipiesContainer/RecipiesContainer';
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
	searchBarDefault
} from '../styles/styles';

const Home: React.FC = () => {
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

			<div className={difficultyContainer}>
				<div className={difficultyButtonDefault}>
					<h3 className="nunito-sans-normal">All</h3>
				</div>
				<div className={difficultyButtonDefault}>
					<h3 className="nunito-sans-normal">Easy</h3>
				</div>
				<div className={difficultyButtonDefault}>
					<h3 className="nunito-sans-normal">Medium</h3>
				</div>
				<div className={difficultyButtonDefault}>
					<h3 className="nunito-sans-normal">Hard</h3>
				</div>
			</div>
			<RecipiesContainer />
			<div className={loadMoreButtonBigContainer}>
				<div className={loadMoreButtonSmallContainer}>
					<h5 className={clsx('just-me-again-down-here-small', 'text-xl')}>
						Load more
					</h5>
				</div>
			</div>
		</>
	);
};

export default Home;
