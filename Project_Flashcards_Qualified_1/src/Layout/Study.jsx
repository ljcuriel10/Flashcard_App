import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { listCards } from "../utils/api"

export default function Study({ decks }){
    const [cards, setCards] = useState([]);
    const { deckId } = useParams();

    useEffect(() => {
        async function getCards(){
            const cardsFromAPI = await listCards(deckId);
            setCards(cardsFromAPI);
          }
         
          getCards();
    },[deckId]);

 
//    const deckName = decks.map(deck => (
//        cards.map(card => (<h2 key={card.id}>{card.deckId === deck.id ? `${deck.name}: Study`: ""} </h2>))
//    ));
const name = decks.map(({name}) => <div className="card-title">{name}</div>)
  const cardsInfo = cards.map(({deckId, front, back}) => (
    
     
          <div className="card">
              {name}
              <div className="card-body">{front}</div>
          </div>
      ))
 
   return (
   <>
   <nav aria-label="breadcrumb">
       <ol className="breadcrumb">
           <li className="breadcrumb-item"><Link to="/">Home</Link></li>
           <li className="breadcrumb-item active" aria-current="page"><Link to="/decks/:deckId/study">Study</Link></li>
       </ol>
   </nav>
   {cardsInfo}
   
   </>)
    
}