import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {  listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import Decks from "./Decks"
import Study from "./Study"
import CreateDeck from "./CreateDeck"

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function getDecks(){
        const deckFromAPI = await listDecks();
        setDecks(deckFromAPI);
    }
    
    getDecks();
},[]);

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
        <Route exact={true} path="/">
          <Home decks={decks} setDecks={setDecks}  />
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
       
        <Route path="/decks/:deckId/study">
            <Study decks={decks} />
        </Route>
        <Route path="/decks/:deckId">
          <Decks decks={decks} />
        </Route>
        <Route>
          <NotFound />
        </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
