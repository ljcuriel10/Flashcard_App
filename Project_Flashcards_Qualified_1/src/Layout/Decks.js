import React, {useEffect, useState} from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import { listCards, readDeck } from '../utils/api/index'


export default function Decks({decks}){
    const [cards, setCards] = useState([]);
    const [deck, setDeck] = useState([])
    const { deckId } = useParams();
    const { url } = useRouteMatch();
    
    

    useEffect(() => {
        async function getCards(){
            const cardsFromAPI = await listCards(deckId);
            setCards(cardsFromAPI);
          };
        async function getDeck(){
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
          getDeck()
          getCards();
    },[deckId]);
    console.log(deck.cards)
    const cardInfo = cards.map(({ id, front, back }) => (
        <div key={id} className="card mb-5" >
            <div className="card-body">
            <div className="row">
                <p className="col-6 card-text">{front}</p>
                <p className="col-6 card-text">{back}</p>
            </div>
            <div className="d-flex justify-content-end">
                <Link to="/" className="btn btn-secondary fas fa-pencil-alt"> Edit</Link>
                <button className="btn btn-danger fas fa-trash-alt ml-2"></button>
            </div>
            </div>
        </div>
    ))
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active"><Link to="">{deck.name}</Link></li>
            </ol>
        </nav>
        
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{deck.name}</h2>
                <p className="card-text">{deck.description}</p>
                <div className="d-flex">
                    <Link to="/" className=" btn btn-secondary fas fa-pencil-alt"> Edit</Link>
                <Link to="/decks/:deckId/study" className=" btn btn-primary fas fa-book" > Study</Link>
                <Link to="/" className=" btn btn-primary fas fa-plus"> Add Cards</Link>
                <button className="ms-auto  btn btn-danger fas fa-trash-alt "></button>
                </div>
            </div>
        </div>
        <h2>Cards</h2>
        
        {cardInfo}
        
        </>
    )
}