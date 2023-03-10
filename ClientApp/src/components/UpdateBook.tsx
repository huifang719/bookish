import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';

interface Props {
    OLID: string;
    bookState: bookStateValue
}

interface bookStateValue {
    OLID: string
    name: string;
    price: number;
    stock: number;
}
interface FormState {
    name: string;
    price: number;
    stock: number;
    
}

const UpdateBook: React.FC<Props> = ({ OLID, bookState } ) => {
    const [formState, setFormState] = useState<FormState>({ name: bookState.name, price: bookState.price, stock: bookState.stock });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const updateBook = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
        event.preventDefault()
        const response = await fetch(`api/Books/OLID/${OLID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formState, OLID: OLID })
        });
        const data = await response.json();
        console.log(data)
    }

    return (
        <>
            <Form onSubmit={updateBook}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder={bookState.name } value={formState.name} name="name"
                        onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" value={formState.price} name="price" onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>stock</Form.Label>
                    <Form.Control type="number" placeholder="Enter stock" value={formState.stock} name="stock" onChange={handleInputChange} required />
                </Form.Group>
                <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>
                        Edit Stock
                    </Tooltip> }
                >
                   <Button type="submit" style={{ border:"none", backgroundColor: "transparent" }}><FaRegEdit /></Button>
                </OverlayTrigger>
                
            </Form>
        </>

    )
}

export default UpdateBook;