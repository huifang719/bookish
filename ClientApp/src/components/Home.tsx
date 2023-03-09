import React, { useEffect } from 'react'
import ProductList from './ProductList';

const Home: React.FC = () => {
    const fetchBookList = async () => {
        console.log("lets go")
        const books = await fetch('api/Books')
            .then(res => res.json())
            .then(res => {
                console.log('back')
            })
    }
    useEffect(() => {
        fetchBookList()
    }, [])
    return (
        <ProductList />
    )
}

export default Home;