import React from "react";
import { Link } from "react-router-dom";

const AllAuthors = ({allAuthors, deleteAuthor}) => {
    const deleteHandler = e => {
        const authorId = e.target.id;
        deleteAuthor(authorId);
    } 
    return (
        <div>
            <Link to={'/authors/new'}>Add New Author</Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    { allAuthors.map (author => {
                        return (
                            <tr key={author._id}>
                                <td>{author.authorName}</td>
                                <td><Link className="btn btn-primary" to={`/edit/author/${author._id}`}>Edit</Link> | <button className="btn btn-danger" onClick={deleteHandler} id={author._id}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AllAuthors;