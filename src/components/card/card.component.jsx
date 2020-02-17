import React from "react";

import "./card.styles.css";

// formats the individual rolodex card elements

// - props => () functional component that returns a div
// className = "card-container" assigns the css from the import
// inside the div is the actual contents of each card
// an image from robohash, with the alt name of 'monster' and the src, with the number in the url changed according to ${} and the monster id
// the name of a monster element passed through the properties

export const Card = props => (
  <div className="card-container">
    <img
      alt="staff member"
      src={`https://faces.design/faces/${getGender(props.monster.id)}${
        props.monster.id
      }.png`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

function getGender(n) {
  if (n % 2 === 0) {
    return "m/m";
  }
  return "w/w";
}

//src={`https://robohash.org/${props.monster.id}?set=set5`}
