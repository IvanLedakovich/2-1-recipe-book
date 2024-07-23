import clsx from 'clsx';
import React from 'react';
import {
	cardDifficultySmallContainer,
	difficultyContainer
} from '../../../styles/styles';

const Difficulty = (difficulty) => {
	difficulty = 'Hard';

	switch (difficulty) {
		case 'Easy':
			return (
				<div
					className={clsx(
						cardDifficultySmallContainer,
						'border-[#168914]',
						'bg-[#03b1001f]'
					)}
				>
					<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#168914]')}>
						Easy
					</h5>
				</div>
			);
			break;
		case 'Medium':
			return (
				<div
					className={clsx(
						cardDifficultySmallContainer,
						'border-[#C65F00]',
						'bg-[#ff99001a]'
					)}
				>
					<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#C65F00]')}>
						Medium
					</h5>
				</div>
			);
			break;
		case 'Hard':
			return (
				<div
					className={clsx(
						cardDifficultySmallContainer,
						'border-[#D20C0C]',
						'bg-[#d20c0c1b]'
					)}
				>
					<h5 className={clsx('nunito-sans-normal', 'text-xl', 'text-[#D20C0C]')}>
						Hard
					</h5>
				</div>
			);
			break;
	}
};

export default Difficulty;
