import './App.css'
import quotes from "./db/quotes.json"
import { getRandomElement } from './utils/random';
import QuoteBox from './components/QuoteBox';
import { useState } from 'react';

const bgs = ["bg1", "bg2", "bg3", "bg4"];


function App() {

  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(bgs));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(bgs));
  }

  return (
    <>
      <main className={`App ${currentBg}`}>
        <QuoteBox className="quotebox" quote={quote} handleChangeQuote={handleChangeQuote}/>
      </main>
    </>
  );
}

export default App
