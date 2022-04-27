import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBox from './searchBox'
import { store } from '../..//app/store';
import { Provider } from 'react-redux'

test('renders content', () => {

    render(<Provider store={store}> <SearchBox /> </Provider>)

    const SearchBoxElement = screen.getByRole("search")
    expect(SearchBox).toBeDefined()

})


test('Cursor Update', async () => {

    const mockHandler = jest.fn()

    render(<Provider store={store}> <SearchBox /> </Provider>)

    const user = userEvent.setup()
    const SearchBoxElement = screen.getByRole("search")
    await user.click(SearchBoxElement)
    expect(SearchBoxElement.children[1]).toHaveFocus()

})


// test('Global SearchText Update on Change', async () => {

//     const mockHandler = jest.fn()

//     render(<Provider store={store}> <SearchBox /></Provider>)

//     const InputElement = screen.getByTitle("Input")

//     const user = userEvent.setup()

//     await user.click(InputElement)




// })




