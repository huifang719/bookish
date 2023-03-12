import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Props {
    OLID: string;
}
const UpdateBook: React.FC<Props> = ({ OLID } ) => {
    interface FormState {
        name: string;
        price: number;
        stock: number;
    }
    const [formState, setFormState] = useState<FormState>({ name: '', price: 0, stock: 0 });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };
    console.log(OLID)
    const updateBook = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
        event.preventDefault()
        const response = await fetch(`api/Books/OLID/${OLID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        });
        const data = await response.json();
        console.log(data)
    }

    return (
        <>
            <Form onSubmit={updateBook}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={formState.name} name="name"
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
                <Button variant="primary" type="submit">
                    Update Book
                </Button>
            </Form>
        </>

    )
}

export default UpdateBook;