import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Row } from 'react-bootstrap';

const Result: React.FC = () => {
    const result = useSelector((state: any) => state.search.value)
    return (
        <Container>
            <h3>Your result....</h3>
            <Row xs={2} md={3} lg={4} >
                {result && result.map((book: { name: string, cover: string, author: string }) =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.cover} />
                        <Card.Body>
                            <Card.Title>{book.name}</Card.Title>
                            <Card.Text>
                                Author: {book.author}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Row>
        </Container>
    )
}

export default Result;