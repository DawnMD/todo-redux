import {
	ADD_CARD,
	ADD_ITEM_TO_CARD,
	REMOVE_CARD,
	REMOVE_ITEM_FROM_CARD,
} from './constants';
export const addItemToCard = (todo) => {
	return {
		type: ADD_ITEM_TO_CARD,
		payload: {
			timestamp: new Date(),
			todo,
		},
	};
};

export const addCard = (title) => {
	return {
		type: ADD_CARD,
		payload: title,
	};
};

export const removeItemFromCard = (todo) => {
	return {
		type: REMOVE_ITEM_FROM_CARD,
		payload: todo,
	};
};

export const removeCard = (title) => {
	return {
		type: REMOVE_CARD,
		payload: title,
	};
};
