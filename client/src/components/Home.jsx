import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";

import AllAuthors from "./AllAuthors";

const Home = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/authors')
            .then( res => setAllAuthors(res.data))
            .catch( err => console.log(err))
    }, [] )

    const deleteAuthor = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/authors/${id}`)
        .then (res => {
            const updatedAllAuthors = allAuthors.filter(author => author._id !== res.data._id)
            setAllAuthors(updatedAllAuthors);
            navigate('/authors')

        })
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Routes>
                <Route path='/' element={ <AllAuthors allAuthors={allAuthors} deleteAuthor={deleteAuthor}/>} />
            </Routes>
        </div>

    )
}

export default Home;