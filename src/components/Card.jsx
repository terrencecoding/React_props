import React from "react";

function Card({ name, img, tel, email, alt }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={alt} />
      <p>{tel}</p>
      <p>{email}</p>
    </div>
  );
}

export default Card;
