import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const StockManagement: React.FC = () => {
    interface FormState {
        OLID: string;
        name: string;
        price: number;
        stock: number; 
    }
    const [formState, setFormState] = useState<FormState>({ OLID:'', name: '', price: 0, stock: 0 });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };
    const addBook = async(event: React.FormEvent<HTMLFormElement>): Promise<any> => {
        event.preventDefault()
        const response = await fetch('api/Books', {
            method: 'POST',
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
            <Form onSubmit={ addBook }>
                <Form.Text style={{ fontSize: '2rem' }}>Add book</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>OLID</Form.Label>
                    <Form.Control type="text" placeholder="Enter OLID" value={formState.OLID} name="OLID" onChange={handleInputChange} required />
                </Form.Group>
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
                    Add Book
                </Button>
            </Form> 
        </>

    )
}

export default StockManagement;