import globalStateSliceReducer, {
    setLogin, setCurrentPage, setSearchTextFilter, setUserInfo
} from "./globalStateSlice";



describe('Global State', () => {
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
    };

    it('should handle inital State', () => {

        expect(globalStateSliceReducer(undefined, { type: 'unknown' })).toEqual(

            {
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


        )


    });

    it('should handle setLogin', () => {
        const state = globalStateSliceReducer(initialState, setLogin())
        expect(state.login).toBe(false)

    })



});