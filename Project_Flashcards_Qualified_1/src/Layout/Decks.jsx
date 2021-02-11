import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import { listDecks } from "../utils/api";

export default function Decks(){
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        async function getDecks(){
            const deckFromAPI = await listDecks();
            setDecks(deckFromAPI);
        }
        getDecks();
    },[]);

    const deckInfo = decks.map(({id, name, description}) => (
        <div className="row decks">
            <div className="col-10 mb-5 card">
                <div className="card-title pt-4"> { name } </div>
                <div className="card-body"> { description } </div>
                <div className="row pb-2">
                    <Link className="col-1 ml-2 mr-2 btn btn-secondary fas fa-eye"> View </Link>
                    <Link className="col-1 mr-2 btn btn-primary fas fa-book"> Study </Link>
                    <button className="btn btn-danger fas fa-trash"></button>
                </div>
            </div>
        </div>
    ))
    return (
        <>
        <Link className="btn btn-secondary">Create Deck</Link>
       {deckInfo}
        </>
    )
}