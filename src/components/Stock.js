import React, {useState} from "react";

function Stock({stock, filterPortfolio}) {

  

const {id, ticker, name, type, price} = stock




// function onClick() {
//   console.log(stock)
//  filterPortfolio(stock)
// }


  return (
    <div>
      <div className="card" onClick={() => filterPortfolio(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
