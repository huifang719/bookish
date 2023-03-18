import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StockManagement from './StockManagement';
import { FaRegEdit } from 'react-icons/fa';

interface BookState {
    olid: string
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
}

const AdminPage: React.FC = () => {
    const [lowStockBooks, setLowStockBooks] = useState<BookState[]>([])
    const fetchLowStockBooks = async () => {
        const books = await fetch("api/Books/Stock")
            .then(res => res.json())

        if (books.status !== 404) {
            setLowStockBooks(books)
        }
    }

    useEffect(() => {
        fetchLowStockBooks()
    }, [])

    return (
        <Container>
            <h1>Admin</h1>
            <h6>Low Stock Item</h6>
            <CardGroup>
                {lowStockBooks && lowStockBooks.map((book: BookState, index) => (
                    <Card key={index} style={{ width: '3rem' }} >
                        <Card.Img variant="top" src={ book.imageUrl } />
                        <Card.Body>
                            <Card.Title style={{ display: "flex", flexDirection:"row", justifyContent: "space-between", margin: 0 }}>
                                <p>{book.olid}</p> 
                                <Link to={`/details/${book.olid}`}>
                                    <FaRegEdit />
                                </Link>
                            </Card.Title>
                            <Card.Text>
                                {book.name}
                                <p style={{ color: "red"}}>Stock: {book.stock}</p>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
            
            <StockManagement />
        </Container>
        
    )
}

export default AdminPage;