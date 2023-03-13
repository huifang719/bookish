import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const stockTake = [
    {
        OLID: "OL37828206M",
        name: "A Dog's Purpose",
        price: 42.99,
        stock: 25
    },
    {
        OLID: "OL25452011M",
        name: "Four: A Divergent Collection",
        price: 22.99,
        stock: 25
    },
    {
        OLID: "OL28414930M",
        name: "Paper towns",

        price: 34.25,
        stock: 25
    },
    {
        OLID: "OL46418M",
        name: "The millennium",
        price: 32.58,
        stock: 25
    },
    {
        OLID: "OL35675912M",
        name: "Harry Potter and the Deathly Hallows",
        price: 35.49,
        stock: 25
    },
    {
        OLID: "OL25936998M",
        name: "Salt to the Sea",
        price: 25.98,
        stock: 25
    },
    {
        OLID: "OL26387134M",
        name: "A Gentleman in Moscow",
        price: 27.58,
        stock: 25
    },
    {
        OLID: "OL26201129M",
        name: "Crooked Kingdom",
        price: 20.99,
        stock: 25
    },
    {
        OLID: "OL29412746M",
        name: "The Psychology of Money",
        price: 18.58,
        stock: 25
    },
    {
        OLID: "OL27282505M",
        name: "William - the Outlaw",
        price: 15.99,
        stock: 25
    },
    {
        OLID: "OL38061727M",
        name: "It Ends with Us, It Starts with Us",
        price: 34.25,
        stock: 25
    },
    {
        OLID: "OL32532952M",
        name: "Better Than the Movies",
        price: 22.99,
        stock: 25
    },
    {
        OLID: "OL26992991M",
        name: "A Court of Mist and Fury",
        price: 37.97,
        stock: 25
    },
    {
        OLID: "OL7826547M",
        name: "A Game of Thrones",
        price: 45.98,
        stock: 25
    },
    {
        OLID: "OL24896701M",
        name: "Thinking, fast and slow",
        price: 25.98,
        stock: 25
    },
    {
        OLID: "OL38010863M",
        name: "Twisted Lies",
        price: 27.58,
        stock: 25
    },
    {
        OLID: "OL25418184M",
        name: "Men are from Mars, women are from Venus",
        price: 20.99,
        stock: 25
    },
    {
        OLID: "OL25439048M",
        name: "Ignite Me",
        price: 15.99,
        stock: 25
    },
    {
        OLID: "OL26211555M",
        name: "The Magic Of Thinking Big",
        price: 24.99,
        stock: 25
    },
        
    {
        OLID: "OL16600499M",
        name: "The house of the four winds",
        price: 24.99,
        stock: 25
    },
]
interface FormState {
    OLID: string;
    name: string;
    price: number;
    stock: number;
}

const StockManagement: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ OLID:'', name: '', price: 0, stock: 0 });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };
    const addAllbook = (event:any) => {
        event.preventDefault()
        return stockTake.forEach(stock => {
            fetch('api/Books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(stock)
            });
        })
    }
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
            <Button onClick={addAllbook }>Add all</Button>
        </>

    )
}

export default StockManagement;