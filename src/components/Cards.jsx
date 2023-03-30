import React from "react";
import Item from "./Item";
import Homes from "../Api";

const Cards = () => {
  return (
    <>
      {Homes.map((obj) => {
        return <Item 
        key={obj.id}
        rasm={obj.image}
        owner={obj.owner}
        name={obj.houseName}
        location={obj.location}
        bed={obj.beds}
        bath={obj.baths}
        garage={obj.garage}
        sq={obj.measurement}
        OPrice={obj.OPrice}
        price={obj.price}
        />;
      })}
    </>
  );
};

export default Cards;
