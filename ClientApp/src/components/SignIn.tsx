import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { login, logout } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

interface FormState {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const dispatch = useDispatch();
    const loggedInEmail = useSelector((state: any) => state.user.value)
    console.log(loggedInEmail)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };
    const handleSignIn = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        console.log(formState)
        dispatch(login({ email: formState.email }))
    }

    return (
        <>
            <Form onSubmit={handleSignIn}>
                <Form.Text style={{ fontSize: '2rem' }}>Sign In</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={formState.email} onChange={handleInputChange} required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={formState.password} onChange={handleInputChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </>
    )
}

export default SignIn