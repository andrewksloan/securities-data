import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import './TickerLookup.css'

const TickerLookup = () => {
    const [ticker, setTicker] = useState('');
    const [tickerData, setTickerData] = useState(null);

    useEffect(() => {
        console.log(tickerData)
    }, [tickerData]);

    async function getHistoricalData(ticker) {
        const response = await fetch("http://localhost:5000/ticker_entry", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'ticker': ticker
            })
        })
            .then(response => response.json())
                .then(result => {
                    setTickerData(result)
                })
    }

    const handleInputChange = (e) => {
        setTicker(e.target.value)
        console.log(ticker)
    }

    return (
        <div > 
                <div className='ticker-search'>
                    <h1> Enter Ticker Symbol </h1>
                        <input 
                            className="input-ticker" 
                            type="text" 
                            placeholder="Ex: AAPL"
                            onChange={handleInputChange} 
                            onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()} />
                        <input 
                            type="submit" 
                            value="Submit" 
                            onClick={() => getHistoricalData(ticker)} />
                </div>
        </div>
    )
}

export default TickerLookup
