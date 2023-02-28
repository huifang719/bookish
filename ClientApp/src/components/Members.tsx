import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignUp from './SignUp';
import SignIn from './SignIn';
const Members: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={6} md={12}>
                    <SignUp />
                </Col>
                <Col xs={12} lg={6} md={12}>
                    <SignIn />
                </Col>
            </Row>
        </Container>
    )
}

export default Members