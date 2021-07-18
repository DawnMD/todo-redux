import { ADD_CARD,ADD_ITEM_TO_CARD,REMOVE_CARD,REMOVE_ITEM_FROM_CARD} from './constants'
export const addItemToCard = (item) => {
  return {
    type: ADD_ITEM_TO_CARD,
    payload: item,
  };
};

export const addCard = (title) => {
  return {
    type: ADD_CARD,
    payload: title,
  };
};

export const removeItemFromCard = () => {
  return {
    type: REMOVE_ITEM_FROM_CARD,
  };
};

export const removeCard = () => {
  return {
    type: REMOVE_CARD,
  };
};
