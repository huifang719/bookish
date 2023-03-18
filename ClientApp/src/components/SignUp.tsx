import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm, FieldValues } from 'react-hook-form';
import { z } from 'zod';


const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    comfirmPassword: z.string()
})

type FormData = z.infer<typeof schema>;

const SignUp: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const handleSignUp = (data: FieldValues): void => {
        console.log(data)
        /*if (data.password !== data.comfirmPassword) {
            setErrorMessage('Password does not match')
        } else {
            console.log(formState)
        }*/

    }
    return (
        <>
            <Form onSubmit={handleSubmit(handleSignUp)}>
                <Form.Text style={{ fontSize: '2rem' }}>Sign Up</Form.Text>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register('email')} type="email" placeholder="Enter email"  name="email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register('password')} type="password"  name="password"
                         required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Comfirm Password</Form.Label>
                    <Form.Control {...register('comfirmPassword')} type="password"  name="comfirmPassword" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </>
    )
}

export default SignUp