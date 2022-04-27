import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './navbar'
import { store } from '../..//app/store';
import { Provider } from 'react-redux'

test('renders content', () => {

    render(<Provider store={store}> <Navbar /> </Provider>)

    const HomeElement = screen.getByTitle("Home")
    const MoviesElement = screen.getByTitle("Movies")
    expect(HomeElement).toBeDefined()
    expect(MoviesElement).toBeDefined()

})


test('active on click', async () => {


    const mockHandler = jest.fn()

    render(<Provider store={store}> <Navbar /> </Provider>)

    const user = userEvent.setup()
    const MovieButton = screen.getByTitle("Movies")
    await user.click(MovieButton)
    expect(MovieButton).toHaveClass("active_category")

    const TvShowButton = screen.getByTitle("TvShows")
    expect(TvShowButton).not.toHaveClass("active_category")

    const BookMarkButton = screen.getByTitle("Bookmarks")
    expect(BookMarkButton).not.toHaveClass("active_category")

})


// test('global page update', async () => {

//     const mockHandler = jest.fn()

//     render(<Provider store={store}> <Navbar /> </Provider>)

//     const user = userEvent.setup()
//     const MovieButton = screen.getByTitle("Movies")
//     await user.click(MovieButton)


// })

