import { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const DELETE_ONE = "deleteOne";
const CLEAR = "clear";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT: return state.map(item => {
            if (item.id === action.id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        case DECREMENT: return state.map(item => {
            if (item.id === action.id) {
                if (item.count > 0) {
                    return { ...item, count: item.count - 1 };
                }
            }
            return item;
        });
        case DELETE_ONE: return state.filter(item => item.id !== action.id);
        case CLEAR: return [];
    }
}

const initData = [
    { id: 0, name: '香蕉', count: 10, price: 5 },
    { id: 1, name: '苹果', count: 7, price: 3 },
    { id: 2, name: '栗子', count: 9, price: 10 }
];


export const useGoodsState = () => {
    const [goodsData, dispatch] = useReducer(reducer, initData);

    const increment = id => {
        dispatch({ type: INCREMENT, id })
    }

    const decrement = id => {
        dispatch({ type: DECREMENT, id })
    }

    const deleteOne = id => {
        dispatch({ type: DELETE_ONE, id })
    }

    const clear = () => {
        dispatch({ type: CLEAR })
    }

    return [goodsData, { increment, decrement, deleteOne, clear }];
}