import React from "react";

import "./card.styles.css";

// formats the individual rolodex card elements

// - props => () functional component that returns a div
// className = "card-container" assigns the css from the import
// inside the div is the actual contents of each card
// an image from robohash, with the alt name of 'staff member' and the src, with the number in the url changed according to ${} and the staff id
// the name of a staff member element passed through the properties

export const Card = props => (
  <div className="card-container">
    <img
      alt="staff member"
      src={`https://faces.design/faces/${getGender(props.staffMem.id)}${
        props.staffMem.id
      }.png`}
    />
    <h2>{props.staffMem.name}</h2>
    <p>{props.staffMem.email}</p>
  </div>
);

function getGender(n) {
  if (n % 2 === 0) {
    return "m/m";
  }
  return "w/w";
}

//src={`https://robohash.org/${props.monster.id}?set=set5`}
