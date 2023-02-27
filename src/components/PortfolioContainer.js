import React, {useState} from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, handleDelete}) {
  


  const displayPortfolio = portfolio.map((stock) => {
  return (
    <Stock key={stock.id} stock={stock} filterPortfolio={handleDelete}/>
  )
})


  return (
    <div>
      <h2>My Portfolio</h2>
      {
       displayPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
