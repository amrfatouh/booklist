import React, { createContext, useReducer, useEffect } from 'react'
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        let storedItems = localStorage.getItem('books');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
