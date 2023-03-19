import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import stockTake from './StockData';
import { useForm, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    olid: z.string().startsWith('OL', { message: "OLID should start with OL, and end with M" }).endsWith('M', { message: "OLID should start with OL, and end with M" } ),
    name: z.string(),
    price: z.number().min(0),
    stock: z.number().min(0),
    imageUrl: z.string().url()
})

type FormData = z.infer<typeof schema>;

const StockManagement: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({resolver: zodResolver(schema)});
    const addAllbook = (event: React.SyntheticEvent<EventTarget>) : void => {
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
    const addBook = async(data: FieldValues) => {
        console.log(data)
       /* const response = await fetch('api/Books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const res = await response.json();
        console.log(res)*/
    }
    return (
        <>
            <Form onSubmit={ handleSubmit(addBook) }>
                <Form.Text style={{ fontSize: '2rem' }}>Add book</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>OLID</Form.Label>
                    <Form.Control type="text" {...register('olid')} />
                    {errors.olid && <Form.Text className="text-danger">
                        {errors.olid.message}
                    </Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" {...register('name')} name="name" />
                    {errors.name && <Form.Text className="text-danger">
                        {errors.name.message}
                    </Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>price</Form.Label>
                    <Form.Control {...register('price', { valueAsNumber: true })} name="price" />
                    {errors.price && <Form.Text className="text-danger">
                        {errors.price.message}
                    </Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>stock</Form.Label>
                    <Form.Control {...register('stock', { valueAsNumber: true })} name="stock" />
                    {errors.stock && <Form.Text className="text-danger">
                        {errors.stock.message}
                    </Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" {...register('imageUrl')} name="imageUrl" />
                    {errors.imageUrl && <Form.Text className="text-danger">
                        {errors.imageUrl.message}
                    </Form.Text>}
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Add Book
                </Button>
            </Form> 
            <Button onClick={addAllbook }>Add all</Button>
        </>

    )
}

export default StockManagement;