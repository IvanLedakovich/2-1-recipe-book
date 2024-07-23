import React from 'react';
import { recipeCardImage } from '../../styles/styles';

interface RecipeCardImageProps {
	imgSrc: string;
	pt?: string;
}

const RecipeCardImage: React.FC<RecipeCardImageProps> = ({ imgSrc, pt }) => {
	return <img className={recipeCardImage} src={imgSrc} alt="" />;
};

export default RecipeCardImage;
