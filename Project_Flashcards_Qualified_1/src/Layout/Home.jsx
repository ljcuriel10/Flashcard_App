import React from 'react';
import { Link } from "react-router-dom"


export default function Home( { decks } ){
    
    const deckInfo = decks.map(({id, name, description}) => (
        <div key={id} className=" decks">
            <div className="col-10 mb-5 card">
                <h2 className="card-title pt-4"> { name } </h2>
                
                <p className="card-body text-center"> { description } </p>
                <div className="d-flex pb-2">
                    <Link to={`/decks/${id}`} className=" ml-2 mr-2 btn btn-secondary fas fa-eye"> View </Link>
                    <Link to={`/decks/${id}/study`} className=" mr-2 btn btn-primary fas fa-book"> Study </Link>
                    <button className="btn btn-danger fas fa-trash-alt"></button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
        <Link to="/decks/new" className="btn btn-secondary mb-2 fas fa-plus"> Create Deck</Link>
       {deckInfo}
        </>
    )
}