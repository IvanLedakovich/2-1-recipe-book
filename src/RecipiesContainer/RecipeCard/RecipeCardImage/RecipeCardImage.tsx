import React from 'react';

interface RecipeCardImageProps {
	imgSrc: string;
	pt?: string;
}

const RecipeCardImage: React.FC<RecipeCardImageProps> = ({ imgSrc, pt }) => {
	return <img className="RecipeCardImage" src={imgSrc} alt="" />;
};

export default RecipeCardImage;
