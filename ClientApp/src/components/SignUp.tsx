import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

interface FormState {
    email: string;
    password: string;
    comfirmPassword: string
}

const SignUp: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ email: '', password: '', comfirmPassword: '' });
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (formState.password !== formState.comfirmPassword) {
            setErrorMessage('Password does not match')
        } else {
            console.log(formState)
        }

    }
    return (
        <>
            <Form onSubmit={handleSignUp}>
                <Form.Text style={{ fontSize: '2rem' }}>Sign Up</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formState.email} name="email" onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formState.password} name="password"
                        onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Comfirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Comfirm Password" value={formState.comfirmPassword} name="comfirmPassword" onChange={handleInputChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <h5 style={errorMessage === null ? { display: "none" } : { color: "rgb(110,223,94)" }}>{errorMessage}</h5>
            </Form>
        </>
    )
}

export default SignUp