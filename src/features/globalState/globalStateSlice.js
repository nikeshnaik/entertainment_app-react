import { createSlice } from "@reduxjs/toolkit"


const initialState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : {
    login: false,
    currentUser: {
        email: "nikesh@gmail.com",
        password: "admin"
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
            localStorage.setItem('state', JSON.stringify(state))
        },

        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem('state', JSON.stringify(state))
        },

        setCurrentPage: (state, action) => {
            state.pageId = action.payload
            localStorage.setItem('state', JSON.stringify(state))
        },

        setSearchTextFilter: (state, action) => {
            state.searchText = action.payload
            localStorage.setItem('state', JSON.stringify(state))
        }

    }

})


export const { setLogin, setCurrentUser, setCurrentPage, setSearchTextFilter } = globalStateSlice.actions;


export const selectCurrentUser = (state) => state.entertainment_app.currentUser
export const selectCurrentPage = (state) => state.entertainment_app.pageMapping[state.entertainment_app.pageId]
export const selectSearchFilterText = (state) => state.entertainment_app.searchText
export const isLogin = (state) => state.entertainment_app.login


export default globalStateSlice.reducer;