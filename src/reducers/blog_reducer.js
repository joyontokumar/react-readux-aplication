import { BLOGS_ITEMS, ADD_BLOG, REMOVE_BLOG } from "../actions/types";
const initialState = [];
export default function (state = initialState, { payload, type }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case BLOGS_ITEMS:
            return payload
        case ADD_BLOG:
            return [...state, payload]
        case REMOVE_BLOG:
            return state.filter(item => item.id !== payload.id)
        default:
            return state;
    }
}