import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { bookInventroy } from './Products';
import { FaCartPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { addItem, updateItem } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import UpdateBook from './UpdateBook';
import { RiDeleteBinLine } from 'react-icons/ri';

interface BookState {
    OLID: string;
    name: string;
    price: number;
    stock: number;
}

const Details: React.FC = () => {
    const [bookState, setBookState] = useState<BookState>({ OLID: "", name: "", price: 0, stock:0  })
    const [stockState, setStockState] = useState<string| null>(null)
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart.value)
    const id = useParams().id
    const displayBook = bookInventroy.filter((book: { OLID: string, imageUrl: string, author: string, price: number, name: string, description: string }) => book.OLID === id)[0]
    const OLID = displayBook.OLID

    const fetchBookInfo = async () => {
        const res = await fetch(`https://openlibrary.org/search.json?q=${id}`)
                            .then(res => res.json())
        const books = res.docs
        return books
    }

    const fetchBookStock = async () => {
        const book = await fetch(`api/Books/OLID/${OLID}`)
            .then(res => res.json())
        setBookState(book)
    }


    useEffect(() => {
        if (bookState.stock === 0) {
            setStockState("no stock")
        } else if (bookState.stock < 5) {
            setStockState("low stock")
        } else {
            setStockState("in stock")
        }
    }, [bookState])

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

    const removeBook = async (): Promise<any> => {
        const book = await fetch(`api/Books/OLID/${OLID}`, { method: 'DELETE' })
            .then(res => res.json())
    }

    return (
        <Container>
            <IconContext.Provider value={{ size: '1.5rem', color: 'black' }}>
                <Row>
                    <Col xs={12} md={6} xl={6} >
                        <Image src={displayBook.imageUrl} />
                    </Col>
                    <Col xs={12} md={6} xl={6} >
                        <h5>{displayBook.name}</h5>
                        <h6>{displayBook.author}</h6>
                        <p>Author: {displayBook.description}</p>
                        <p>$ {bookState.price}</p>
                        <p style={ bookState.stock != null && bookState.stock >5 ? { color: "green" } : {color: "red"} }>{ stockState }</p>
                        <FaCartPlus onClick={addToCart} />
                    </Col>
                </Row>
                {bookState.price != 0? <Card style={{ width: '18rem' }}>
                    <Card.Header style={{display:"inline-flex", justifyContent:"space-around", margin: 0 } }>
                        <p>{OLID}</p> 
                            <RiDeleteBinLine onClick={removeBook} />
                    </Card.Header>
                    <Card.Body>
                        <UpdateBook OLID={OLID}
                            bookState={bookState} 
                        />
                    </Card.Body>
                </Card>: <></>}
            </IconContext.Provider>
        </Container>
    )
}

export default Details;
