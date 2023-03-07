import React, { useEffect } from 'react'
import ProductList from './ProductList';

const Home: React.FC = () => {
    const fetchBookList= async () => {
        const books = await fetch('books')
            .then(res => res.json())
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