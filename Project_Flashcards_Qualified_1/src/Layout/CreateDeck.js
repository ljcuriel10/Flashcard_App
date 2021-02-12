import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateDeck(){
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active text-secondary"><Link to="">Create Deck</Link></li>
            </ol>
        </nav>
        <h2>Create Deck</h2>
        <form className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
                <input className="form-control" type="text" id="name" name="name" placeholder="Deck Name" />
            <label htmlFor="description" className="form-label">Description:</label>
                <textarea className="form-control" id="description" rows="5"  placeholder="Brief description of the deck" />
            <button type="submit" id="cancel" className="btn btn-secondary mr-3 mt-2">Cancel</button>
            <button type="submit" id="submit" className="btn btn-primary mt-2" >Submit</button>
        </form>
        </>
    )
}