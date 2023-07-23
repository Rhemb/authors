import React, { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

const EditAuthor = ({allAuthors, setAllAuthors}) => {
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect ( () => {
        axios.get(`http://127.0.0.1:8000/api/authors/${id}`)
            .then(res => { setAuthorName(res.data.authorName)})
            .catch(err => {console.log(err)})
    }, [id])

    const updateHandler = e => {
        e.preventDefault();
        const editAuthor = { authorName }

        axios.patch(`http://127.0.0.1:8000/api/authors/${id}`, editAuthor)
            .then(res => {
                const updatedAuthor = res.data;
                const updatedAllAuthors = allAuthors.map( author => {
                    return author._id === updatedAuthor._id?updatedAuthor:author;
                })
                setAllAuthors(updatedAllAuthors);
                navigate('/authors');
            })
            .catch( err => { setErrors(err.response.data.errors) })
    }
    return(
        <div>
            <h3 className="text-secondary">Edit Author</h3>
            <Link to={'/authors'} className="btn btn-primary mb-3 mt-3">Back to Home</Link>
            <div className="form-container">
                <form onSubmit={updateHandler}>
                    <div className="form mb-3 d-flex flex-column">
                        <label className="form-label" htmlFor="authorName">Author Name</label>
                        <input className="form-control" type="text" name="authorName" id="authorName" value={authorName} onChange={e => setAuthorName(e.target.value)}/>
                        { errors.authorName ? <p className="text-danger">{errors.authorName.message}</p> : null }
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <Link className="btn btn-danger me-3" to={'/authors'}>Cancel</Link>
                        <button className="btn btn-primary">Edit Author</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAuthor;