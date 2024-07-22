import clsx from 'clsx';

export const pizzaHeaderContainer = clsx('w-full', 'h-[400px]', 'relative');

export const pizzaHeaderImage = clsx('w-full', 'h-[400px]', 'object-cover');

export const headerLineLeft = clsx(
	'absolute',
	'h-[3px]',
	'w-[31%]',
	'translate-x-[0%]',
	'translate-y-2/4',
	'z-10',
	'left-[0%]',
	'top-2/4',
	'bg-white'
);

export const headerLineRight = clsx(
	'absolute',
	'h-[3px]',
	'w-[31%]',
	'translate-x-[0%]',
	'translate-y-2/4',
	'z-10',
	'left-[69%]',
	'top-2/4',
	'bg-white'
);

export const headerLogoContainer = clsx(
	'absolute',
	'w-[38%]',
	'translate-x-[-5%]',
	'translate-y-[-50%]',
	'z-10',
	'inline-flex',
	'items-center',
	'justify-center',
	'left-[31%]',
	'top-[50%]'
);

export const bowlContainer = clsx('mr-[125px]');

export const bowlReflectionBig = clsx(
	'absolute',
	'w-[2%]',
	'left-[26%]',
	'top-[55%]'
);

export const bowlReflectionSmall = clsx(
	'absolute',
	'w-[0.6%]',
	'left-[28.5%]',
	'top-[72%]'
);

export const searchBarDefault = clsx(
	'absolute',
	'w-[20%]',
	'mt-[50px]',
	'left-[3%]'
);

export const searchBarHovered = clsx(
	'absolute',
	'w-[20%]',
	'mt-[50px]',
	'left-[3%]'
);

export const difficultyContainer = clsx(
	'absolute',
	'w-[38%]',
	'inline-flex',
	'items-center',
	'justify-evenly',
	'h-[35px]',
	'mt-[50px]',
	'left-[61%]'
);

export const difficultyButtonDefault = clsx(
	'w-[18%]',
	'h-[35px]',
	'inline-flex',
	'items-center',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-black'
);

export const difficultyButtonChosen = clsx(
	'w-[18%]',
	'h-[35px]',
	'inline-flex',
	'items-center',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-black'
);

export const recipiesContainer = clsx(
	'grid',
	'grid-cols-[repeat(auto-fit,minmax(400px,1fr))]',
	'gap-[2.5em]',
	'mt-[150px]',
	'mx-[45px]'
);

export const recipeCard = clsx(
	'w-full',
	'h-[585px]',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-black'
);

export const recipeCardImage = clsx(
	'h-[260px]',
	'w-full',
	'object-cover',
	'rounded-[10px]'
);

export const recipeTagsContainer = clsx(
	'grid',
	'grid-cols-4',
	'grid-rows-1',
	'gap-[1em]',
	'mt-[25px]',
	'mx-[10px]'
);

export const recipeTagContainer = clsx(
	'grid',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-[#c65f00]'
);

export const recipeName = clsx('grid', 'justify-left');

export const cuisineContainer = clsx(
	'flex',
	'w-[95%]',
	'h-[6%]',
	'mx-auto',
	'mt-[4%]'
);

export const cuisineImage = clsx();

export const cuisineNameContainer = clsx(
	'grid',
	'w-[25%]',
	'h-[80%]',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-[#D20C0C]',
	'ml-auto'
);

export const cookingTimeContainer = clsx(
	'flex',
	'w-[95%]',
	'h-[6%]',
	'mx-auto',
	'mt-[6%]'
);

export const cookingTimeTextContainer = clsx(
	'grid',
	'w-[25%]',
	'h-[80%]',
	'justify-center',
	'rounded-[10px]',
	'border-[1.5px]',
	'border-solid',
	'border-[#244FE9]',
	'ml-auto'
);
