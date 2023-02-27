import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stocks, setStocks] = useState([])
const [portfolio, setPortfolio] = useState([])



useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then(res => res.json())
  .then(data => setStocks(data))
}, [])



  function filterPortfolio(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock])
    }
    else {
      alert('This stock is already in your portfolio!')
    }
  }

  function handleDelete(deleteStock) {
    const newPortfolio = portfolio.filter(stock => stock.id !== deleteStock.id)
    console.log(newPortfolio)
    setPortfolio(newPortfolio)
  }


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} filterPortfolio={filterPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
