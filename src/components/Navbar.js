import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function Navbar() {
    const { books } = useContext(BookContext)
    return (
        <div className='navbar'>
            <h1>My Book List</h1>
            <p>you have currently {books.length} books to read</p>
        </div>
    )
}

export default Navbar
