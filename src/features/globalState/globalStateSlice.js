import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login: false,
    user: {
        userName: 'john_doe',
        image: '../assets/image-avatar.png',
        name: 'John Doe'
    },
    pageId: 0,
    pageMapping: ['home', 'movies', 'tv shows', 'bookmarks'],
    searchText: 'Beyond Earth'
}


const globalStateSlice = createSlice({

    name: 'entertainment_app',
    initialState,
    reducers: {

        setLogin: (state) => {
            state.login = false
        },

        setUserInfo: (state, action) => {
            state.user = action.payload
        },

        setCurrentPage: (state, action) => {
            state.pageId = action.payload
        },

        setSearchTextFilter: (state, action) => {
            state.searchText = action.payload
        }

    }

})


export const { setLogin, setUserInfo, setCurrentPage, setSearchTextFilter } = globalStateSlice.actions;


export const selectUserInfo = (state) => state.user
export const selectCurrentPage = (state) => state.page


export default globalStateSlice.reducer;