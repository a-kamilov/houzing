import React from "react";
import bed from "./img/bed.png";
import bath from "./img/bath.png";
import garage from "./img/car.png";
import sqFt from "./img/ruler.png";

const Item = (props) => {
  return (
    <div className="item">
      <button>FEATURED</button>
      <button>FOR SALE</button>
      <img src={props.rasm} />
      <img src={props.owner} />
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
      <ul>
        <li>
          <img src={bed} />
          {props.bed}
        </li>
        <li>
          <img src={bath} />
          {props.bath}
        </li>
        <li>
          <img src={garage} />
          {props.garage}
        </li>
        <li>
          <img src={sqFt} />
          {props.sq}
        </li>
      </ul>
      <p>{props.OPrice}</p>
      <h3>{props.price}</h3>
      <div className="icons">
        <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
        <i class="far fa-heart"></i>
      </div>
    </div>
  );
};

export default Item;
