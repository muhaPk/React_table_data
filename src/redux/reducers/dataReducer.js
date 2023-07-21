import {createSlice} from '@reduxjs/toolkit';

const dataReducer = createSlice({

    name: 'data',
    initialState: {
        loading: false,
        posts: [],
        currentPosts: [],
        currentPage: 0,
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
            state.loading = true
        },
        setCurrentPosts(state, action) {
            state.currentPosts = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },

        sortCurrentPostsById(state) {
            state.currentPosts.reverse()
        },
    },

})

export default dataReducer.reducer;
export const {setPosts, setCurrentPosts, setCurrentPage, sortCurrentPostsById} = dataReducer.actions;
