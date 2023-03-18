import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { login, logout } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
    password: z.number()
})

type FormData = z.infer<typeof schema>;

const SignIn: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const dispatch = useDispatch();
    const loggedInEmail = useSelector((state: any) => state.user.value)

    const handleSignIn = (data: FieldValues) => {
        console.log(data)
        console.log(errors.email?.message)
       /* dispatch(login({ email: formState.email }))*/
    }

    return (
        <>
            <Form onSubmit={handleSubmit(handleSignIn)}>
                <Form.Text style={{ fontSize: '2rem' }}>Sign In</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register('email')}  name="email" />
                    {/*{errors.password && <Form.Text className="text-danger">
                        errors.password.message
                    </Form.Text>}*/}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register('password')} type="password" name="password" />
                    {/*{errors.password && <Form.Text className="text-danger">
                        errors.password.message
                    </Form.Text>}*/}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </>
    )
}

export default SignIn