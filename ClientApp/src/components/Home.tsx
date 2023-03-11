import React, { useEffect } from 'react'
import ProductList from './ProductList';

const Home: React.FC = () => {
    const fetchBookList = async () => {
        const response = await fetch('books')
        const books = await response.json();
        console.log(books)
    }
    useEffect(() => {
        fetchBookList()
    }, [])
    return (
        <ProductList />
    )
}

export default Home;