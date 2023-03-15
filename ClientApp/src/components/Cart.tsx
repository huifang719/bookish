import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { removeItem, updateItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const CartItems = useSelector((state: any) => state.cart.value)
    const totalPrice = CartItems
        .reduce((total: number, item: any) => total + item.quantity * item.price, 0)
        .toFixed(2)


    const handleRemove = (index: number): void => {
        const id = CartItems[index].id
        dispatch(removeItem({ id }))
    }

    const handleDeduction = (index: number): void => {
        const id = CartItems[index].id
        if (CartItems[index].quantity > 1) {
            const updatedBook = { ...CartItems[index], quantity: CartItems[index].quantity - 1 }
            dispatch(updateItem(updatedBook))
        } else (
            dispatch(removeItem({ id }))
        )
    }

    const handleAddition = (index: number): void => {
        const updatedBook = { ...CartItems[index], quantity: CartItems[index].quantity + 1 }
        dispatch(updateItem(updatedBook))
    }

    return (
        <Container >
            <h5>Your Cart</h5>
            {CartItems && CartItems.map((item: { id: string, imageUrl: string, price: number, quantity: number, name: string }, index: number) =>
                <Row
                    style={{ height: "8rem", background: "#E6E3EB", marginBottom: 2 }}
                    key={index}>
                    <Col xs={3} lg={1} md={1} >
                        <Link to={`/details/${item.id}`}>
                            <Image src={item.imageUrl} style={{ height: "8rem" }} />
                        </Link>
                    </Col>
                    <Col xs={7} lg={5} md={5}>
                        <Row className='ps-8'>
                            <Col>{item.name}</Col>
                            <Col>
                                <Button onClick={() => handleRemove(index)}>Remove Item</Button>
                            </Col>
                        </Row>
                        <h6>Price: ${item.price}</h6>
                    </Col>
                    <Col
                        xs={2} lg={5} md={5}
                        className='d-inline-flex align-self-center'>
                        <FaMinus className='align-self-center' onClick={() => handleDeduction(index)} />
                        {/* <Input /> */}
                        <h5>{item.quantity}</h5>
                        <FaPlus className='align-self-center' onClick={() => handleAddition(index)} />
                    </Col>

                </Row>)}
            <Row className='justify-content-end'>Total Price {totalPrice}</Row>
        </Container>
    )
}

export default Cart; 