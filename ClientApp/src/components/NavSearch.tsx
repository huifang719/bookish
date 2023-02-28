import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showResult } from '../features/searchSlice'

const NavSearch: React.FC = () => {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = () => {
        fetch(`http://openlibrary.org/search.json?title=${query}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.docs)
                // get the book information
                const result = res.docs.map((book: any) => {
                    const name = book["title"]
                    const author = book["author_name"][0]
                    const cover = `https://covers.openlibrary.org/b/id/${book["cover_i"]}-L.jpg`
                    return { name, author, cover }
                })
                dispatch(showResult(result))
            })
        navigate('/result');
        setQuery('')
    }

    return (
        <>
            <Form className="d-inline-flex search">
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
                <Button
                    variant="outline-success"
                    onClick={handleSearch}>Search</Button>
            </Form>

        </>
    )
}
export default NavSearch; 