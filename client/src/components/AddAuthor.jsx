import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const AddAuthor = ({allAuthors, setAllAuthors}) => {
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        const newAuthor = { authorName }

        axios.post('http://127.0.0.1:8000/api/authors', newAuthor)
            .then(res => {
                setAllAuthors([...allAuthors, res.data])
                navigate('/authors')
            }
        )
        .catch( err => {
            setErrors(err.response.data.errors);
        })
    }
    return(
        <div>
            <Link to={'/authors'} className="btn btn-primary mb-3 mt-3">Back to Home</Link>
            <div className="form-container">
                <form onSubmit={formHandler}>
                    <div className="form mb-3 d-flex flex-column">
                        <label className="form-label" htmlFor="authorName">Author Name</label>
                        <input className="form-control" type="text" name="authorName" id="authorName" value={authorName} onChange={e => setAuthorName(e.target.value)}/>
                        { errors.authorName ? <p className="text-danger">{errors.authorName.message}</p> : null }
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <Link className="btn btn-danger me-3" to={'/authors'}>Cancel</Link>
                        <button className="btn btn-primary">Add Author</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddAuthor;