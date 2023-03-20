import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
    isAdmin: z.boolean(),
    adminToken: z.string().optional()
})

type FormData = z.infer<typeof schema>;

const SignUp: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema) });
    const [isAdmin, setAdmin] = useState<boolean>(false)

    const handleSignUp = (data: FieldValues): void => {
        console.log(data)
        /*if (data.password !== data.comfirmPassword) {
            setErrorMessage('Password does not match')
        } else {
            console.log(formState)
        }
*/
    }
    return (
        <>
            <Form onSubmit={handleSubmit(handleSignUp)}>
                <Form.Text style={{ fontSize: '2rem' }}>Sign Up</Form.Text>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register('email')} name="email" type="email" />
                    <Form.Text className="text-danger">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register('password')} type="password"  name="password"
                        required />
                    <Form.Text className="text-danger">
                        {errors.password?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control {...register('confirmPassword')} type="password"  name="confirmPassword" required />
                    <Form.Text className="text-danger">
                        {errors.confirmPassword?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Are you an admin?" {...register('isAdmin')} name="isAdmin" onChange={() =>setAdmin(!isAdmin) } />
                </Form.Group>
                {isAdmin && <Form.Group className="mb-3" controlId="for">
                    <Form.Label>Admin Token</Form.Label>
                    <Form.Control {...register('adminToken')} type="password" name="adminToken" required />
                </Form.Group> }
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </>
    )
}

export default SignUp