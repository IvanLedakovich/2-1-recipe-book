import clsx from 'clsx';
import React from 'react';
import {
	bowlContainer,
	bowlReflectionBig,
	bowlReflectionSmall,
	goBackButton,
	headerLineLeft,
	headerLineRight,
	headerLogoContainer
} from '../styles/styles';

import bowl from '../images/bowl.svg';

const RecipePage: React.FC<{ id }> = (id) => {
	return (
		<>
			<div
				className={clsx(
					'mt-[50px]',
					'w-[100%]',
					'h-[100px]',
					'bg-red-600',
					'grid',
					'items-center'
				)}
			>
				<button className={clsx(goBackButton, 'scale-1')}>Go back</button>

				<div id="headerLine" className={headerLineLeft} />
				<div id="headerLine" className={headerLineRight} />
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
				</div>
			</div>
		</>
	);
};

export default RecipePage;
