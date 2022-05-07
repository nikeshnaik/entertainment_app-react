import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login: false,
    user: {
        userName: 'john_doe',
        image: '../assets/image-avatar.png',
        name: 'John Doe'
    },
    pageId: 0,
    pageMapping: ['Home', 'Movie', 'TV Series', 'Bookmark'],
    searchText: 'Beyond Earth'
}


const globalStateSlice = createSlice({

    name: 'entertainment_app',
    initialState,
    reducers: {

        setLogin: (state, action) => {
            state.login = action.payload
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


export const selectUserInfo = (state) => state.entertainment_app.user
export const selectCurrentPage = (state) => state.entertainment_app.pageMapping[state.entertainment_app.pageId]
export const selectSearchFilterText = (state) => state.entertainment_app.searchText


export default globalStateSlice.reducer;