import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

// creates a component named cardlist with props:
// assigned the card-list css
// map each element from the staff array as a staff member
// create a card with the key staffMem.id and the type staffMem

export const CardList = props => (
  <div className="card-list">
    {props.staff.map(staffMem => (
      <Card key={staffMem.id} staffMem={staffMem} /> // monster = {monster} adds the monster as a prop
    ))}
  </div>
);
