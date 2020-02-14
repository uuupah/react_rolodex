import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

// creates a component named cardlist with props:
// assigned the card-list css
// map each element from the monsters array as a monster
// create a card with the key monster.id and the type monster

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} /> // monster = {monster} adds the monster as a prop
    ))}
  </div>
);
