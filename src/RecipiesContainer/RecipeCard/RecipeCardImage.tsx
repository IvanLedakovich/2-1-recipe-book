import React from 'react';
import { recipeCardImage } from '../../styles/styles';

interface RecipeCardImageProps {
	imgSrc: string;
}

const RecipeCardImage: React.FC<RecipeCardImageProps> = ({ imgSrc }) => {
	return <img className={recipeCardImage} src={imgSrc} alt="" />;
};

export default RecipeCardImage;
