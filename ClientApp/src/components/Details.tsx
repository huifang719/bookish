import React, { useEffect } from 'react';
import { Container, Row, Col, Image,Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { bookInventroy } from './Products';
import { FaCartPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { addItem, updateItem } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import UpdateBook from './UpdateBook';

const Details: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.value)
    const id = useParams().id
    const displayBook = bookInventroy.filter((book: { OLID: string, imageUrl: string, author: string, price: number, name: string, description: string }) => book.OLID === id)[0]
    const OLID = displayBook.OLID

    const fetchBookInfo = async () => {
        const res = await fetch(`https://openlibrary.org/search.json?q=${id}`)
                            .then(res => res.json())
        const books = res.docs
        console.log(books)
        return books
    }

    const fetchBookStock = async () => {
        const book = await fetch(`api/Books/OLID/${OLID}`)
            .then(res => res.json())
        console.log(book)
    }

    useEffect(() => {
        fetchBookInfo()
        fetchBookStock()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addToCart = (): void => {
        let existItem = cartItems.filter((element: { id: string, imageUrl: string, price: number, quantity: number, name: string }) => element.id === OLID)
        if (existItem.length > 0) {
            const selectBook = existItem[0]
            dispatch(updateItem({ ...selectBook, quantity: selectBook.quantity + 1 }))
        } else {
            dispatch(addItem({ id: displayBook.OLID, name: displayBook.name, imageUrl: displayBook.imageUrl, quantity: 1, price: displayBook.price }))
        }
    }

    const removeBook = async(): Promise<any> => {
        const book = await fetch(`api/Books/OLID/${OLID}`, { method: 'DELETE' })
            .then(res => res.json())
    }
    return (
        <Container>
            <IconContext.Provider value={{ size: '3rem', color: 'black' }}>
                <Row>
                    <Col xs={12} md={6} xl={6} >
                        <Image src={displayBook.imageUrl} />
                    </Col>
                    <Col xs={12} md={6} xl={6} >
                        <h5>{displayBook.name}</h5>
                        <h6>{displayBook.author}</h6>
                        <p>Author: {displayBook.description}</p>
                        <p>$ {displayBook.price}</p>
                        <FaCartPlus onClick={addToCart} />
                    </Col>
                </Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{ OLID }</Card.Header>
                    <Card.Body>
                        <UpdateBook OLID={OLID} />
                        <Button onClick={ removeBook } >Remove</Button>
                    </Card.Body>
                </Card>
            </IconContext.Provider>
        </Container>
    )
}

export default Details;
