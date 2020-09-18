import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookList() {
    const { books, addBook, removeBook } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author)
        setTitle('');
        setAuthor('');
    }

    return (
        <div className='book-list'>
            <ul>
                {books.length ? (books.map(book => {
                    return (
                        <li key={book.id} onClick={() => removeBook(book.id)}>
                            <div className='title'>{book.title}</div>
                            <div className='author'>{book.author}</div>
                        </li>
                    )
                })) : (
                        <li className='empty'>no books to read</li>
                    )}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='book title' required value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='book author' required value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="submit" value="add book" />
            </form>
        </div>
    )
}

export default BookList
