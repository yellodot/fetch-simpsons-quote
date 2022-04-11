import { useState } from 'react';
import './App.css';
import { QuoteCard } from './components/QuoteCard';
const axios = require('axios');


function App() {

  const [quote, setQuote] = useState('');

  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((res) => res.data)
    .then((data) => {
    console.log(data);
    setQuote(data[0])
    })

  }


  return (
    <div className="container">
      <button className="submit-feedback" type='button' onClick={getQuote}>Get a quote</button>
      <QuoteCard quote={quote} />
    </div>
  );
}

export default App;
