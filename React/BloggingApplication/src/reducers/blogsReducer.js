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

const blogReducer = (state, action) => {
    switch (action.type) {
        case GET_BLOAGS_BEGIN:
            return {
                ...state, blogsLoading: true
            }
        case GET_BLOAGS_SUCCESS:
            return {
                ...state, blogsLoading: false,
                blogs: action.payload,
                tempBlogs: action.payload
            }
        case GET_BLOAGS_ERROR:
            return {
                ...state, blogsLoading: false,
                blogsError: true
            }
        case GET_SINGLE_BLOAGS_BEGIN:
            return {
                ...state, singleBlogLoading: true
            }
        case GET_SINGLE_BLOAGS_SUCCESS:
            return {
                ...state, singleBlogLoading: false,
                singleBlog: action.payload
            }
        case GET_SINGLE_BLOAGS_ERROR:
            return {
                ...state, singleBlogLoading: false,
                singleBlogError: true,
            }
        case GET_BLOAG_BY_SEARCHINGITEM_BEGIN:
            return {
                ...state, searchBlogsLoading: true,

            }
        case GET_BLOAG_BY_SEARCHINGITEM_SUCCESS:
            return {
                ...state, searchBlogsLoading: false,
                blogs: action.payload

            }
            case GET_BLOAG_BY_SEARCHINGITEM_ERROR:
            return {
                ...state, searchBlogsLoading: false,
                searchBlogsError:true 

            }

        default:
            return state;
    }
}


export default blogReducer