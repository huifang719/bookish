import React, { useEffect } from 'react'
import { TrendingBooks, classicBooks } from './Products';
import { Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StockManagement from './StockManagement';

const AdminPage: React.FC = () => {
    return (
        <div>
            <h1>Admin</h1>
            {TrendingBooks.map((product: { OLID: string, imageUrl: string, author: string, price: number, name: string, description: string }, index: number) => (
                <Container key={index} style={{ width: "5rem", height: "auto" }} >
                    <Link to={`/details/${product.OLID}`}>
                        <Image fluid
                            src={product.imageUrl}
                            height={200}
                        />
                    </Link>
                    <p>price: ${product.price}</p>
                    <input></input>
                    <p>stock: </p>
                    <input></input>
                </Container>
            ))}
            <StockManagement />
        </div>
        
    )
}

//search bar -- use OLID to server details 
//fetch low stock books 

export default AdminPage;