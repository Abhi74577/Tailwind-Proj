import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/blogsReducer"
import {
    GET_BLOAGS_BEGIN,
    GET_BLOAGS_SUCCESS,
    GET_BLOAGS_ERROR,
    GET_SINGLE_BLOAGS_BEGIN,
    GET_SINGLE_BLOAGS_SUCCESS,
    GET_SINGLE_BLOAGS_ERROR,
    GET_BLOAG_BY_SEARCHINGITEM_BEGIN,
    GET_BLOAG_BY_SEARCHINGITEM_SUCCESS,
    GET_BLOAG_BY_SEARCHINGITEM_ERROR,
    SET_SEARCH_TERM,
    SET_PAGE_COUNT,
    BLOG_URL,
    SERACH_URL
} from "../until/constants"

import axios from "axios";


const initialState = {
    blogsLoding: false,
    blogsError: false,
    blogs: [],
    tempBlogs: [],
    singleBlogLoading: false,
    singleBlogError: false,
    singleBlog: [],
    searchTerm: "",
    searchBlogsLoading: false,
    searchBlogsError: false

}

export const BlogsContext = createContext({});
export const BlogsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchBlogs = async () => {
        dispatch({ type: GET_BLOAGS_BEGIN });
        try {
            const response = await axios.get('https://dummyjson.com/products');
            dispatch({ type: GET_BLOAGS_SUCCESS, payload: response.data.products })
        } catch (error) {
            dispatch({ type: GET_BLOAGS_ERROR })
        }
    }
    const fetchSingleBlog = async (id) => {
        dispatch({ type: GET_SINGLE_BLOAGS_BEGIN })
        try{
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            dispatch({ type: 'GET_SINGLE_BLOAGS_SUCCESS', payload: res.data })
        }
        catch(error){
            dispatch({type: GET_SINGLE_BLOAGS_ERROR})
        }
    }
    const fetchBlogsFromSearch = async (searchTerm) => {
        dispatch({ type: GET_BLOAG_BY_SEARCHINGITEM_BEGIN });
        try {
            const res = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
            dispatch({ type: 'GET_BLOAG_BY_SEARCHINGITEM_SUCCESS', payload: res.data.products })
        }
        catch (error) {
            dispatch({ type: 'GET_BLOAG_BY_SEARCHINGITEM_ERROR' })
        }
    }

    const setSearchTerm = (searchTerm) => {

    }

    return (
        <BlogsContext.Provider value={{
            ...state,
            fetchBlogs,
            fetchSingleBlog,
            fetchBlogsFromSearch,
            setSearchTerm
        }}>
            {children}
        </BlogsContext.Provider>
    )
}