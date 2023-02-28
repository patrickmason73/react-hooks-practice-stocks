import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stocks, setStocks] = useState([])
const [portfolio, setPortfolio] = useState([])
// const [stocksDisplay, setStocksDisplay] = useState([])
const [checked, setChecked] = useState('')
const [type, setType] = useState('')

function sortStocks(e) {
  setChecked(e.target.value)
}

useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then(res => res.json())
  .then(data => {
    setStocks(data);
  })
}, [])

useEffect(() => {
  if(checked === 'Alphabetically') {
    const sortedStocks = handleAlphabet();
    setStocks(sortedStocks)
  } else {
    const sortedStocks = handlePrice();
    setStocks(sortedStocks)
  }
}, [checked])


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

const handleAlphabet = () => {
  return [...stocks].sort(function (a, b) {
    if (a.ticker < b.ticker) {
      return -1;
    }
    if (a.ticker > b.ticker) {
      return 1;
    }
    return 0;
  })
 
}


const handlePrice = () => {
  return [...stocks].sort(function(a, b){
    return a.price-b.price
  })
}


function handleFilter(e) {
  setType(e.target.value)
}


  return (
    <div>
      <SearchBar sortStocks={sortStocks} checked={checked} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} filterPortfolio={filterPortfolio} type={type}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
