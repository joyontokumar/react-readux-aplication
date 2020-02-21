import { base_url } from "../common";
import axios from 'axios';
import { BLOGS_ITEMS, ADD_BLOG, REMOVE_BLOG } from "./types";
// get all blog data
export const blogList = () => dispatch => {
    axios.get(`${base_url}/data/blogs.json`)
        .then(response => {
            dispatch({
                type: BLOGS_ITEMS,
                payload: response.data
            })
        })
        .catch(error => console.log(error.message));
}

// remove blog
export const removeBlog = (blog) => dispatch => {

    dispatch({
        type: REMOVE_BLOG,
        payload: blog
    })
}

// add blog
export const addBlog = (blog) => dispatch => {

    dispatch({
        type: ADD_BLOG,
        payload: blog
    })
}