import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { z } from 'zod';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string(),
    price: z.number().min(0),
    stock: z.number().min(0),
    imageUrl: z.string().url() 
})

type FormData= z.infer<typeof schema>;

interface Props {
    OLID: string;
}

const UpdateBook: React.FC<Props> = ({ OLID } ) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) })

    const updateBook = async(data: FieldValues) => {
        const response = await fetch(`api/Books/OLID/${OLID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ OLID: OLID, ...data })
        });
        const book = await response.json();
        console.log(book)
    }

    return (
        <>
            <Form onSubmit={handleSubmit(updateBook)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control {...register('name')} name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>price</Form.Label>
                    <Form.Control {...register('price', {valueAsNumber: true})} name="price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>stock</Form.Label>
                    <Form.Control {...register('stock', { valueAsNumber: true })} name="stock"  required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control {...register('imageUrl')} name="imageUrl" required />
                </Form.Group>
                <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>
                        Edit Stock
                    </Tooltip> }
                >
                   <Button type="submit" style={{ border:"none", backgroundColor: "transparent" }}><FaRegEdit /></Button>
                </OverlayTrigger>
                {/*<Button type="submit" style={{ border: "none" }}>
                    Update
                </Button>  */}  
            </Form>
        </>

    )
}

export default UpdateBook;