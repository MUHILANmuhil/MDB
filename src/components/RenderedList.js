import React from "react";
import Card from "./Card";

function RenderedList(props) {
  return (
    <>
      <div className="cardTitle">
        <h2>Trending Movies...</h2>
      </div>
      <div className="cards">
        {props.data.map((movie, index) => {
          return <Card key={index} value={movie} />;
        })}
      </div>
    </>
  );
}

export default RenderedList;
