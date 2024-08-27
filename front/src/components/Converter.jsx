import React, { useState } from "react";
import './style.css';
import axios from 'axios';

function Converter() {
    const [todenom, setTodenom] = useState('INR');
    const [fromdenom, setFromdenom] = useState('USD');
    const [amt, setAmt] = useState('');
    const [error,setError]=useState('')
    const [result, setResult] = useState('');

    function handleSubmit(event) {
        if (!amt){
            alert("Enter some value");
            return;
        }
        event.preventDefault();
        axios.post('http://localhost:8000/input',{fromdenom,todenom,amt})
        .then(response=>{setResult(`${amt} ${fromdenom} = ${response.data.rates[todenom]} ${todenom} `)})
        .catch(err=>{
            setError("Something Went Wrong !");
            window.location.reload();
        })       
    }

    if (error) return alert(error);
    return (
        <div>
            <h1>Currency Converter</h1>
            <div className="parent">
                <div className="box">
                    <h2>Enter Your Currency</h2>
                    <form onSubmit={handleSubmit}><br />
                        <input
                            type="text"
                            placeholder="Amount"
                            className="amt form-control"
                            onChange={(e) => setAmt(e.target.value)}
                            autoComplete="off"
                        /><br /><br></br>
                        <select
                            value={fromdenom}
                            onChange={(e) => setFromdenom(e.target.value)}
                            className="form-select"
                        >
                            <option value="AUD">AUD - $ (Australia)</option>
                            <option value="BGN">BGN - лв (Bulgaria)</option>
                            <option value="BRL">BRL - R$ (Brazil)</option>
                            <option value="CAD">CAD - $ (Canada)</option>
                            <option value="CHF">CHF - CHF (Switzerland)</option>
                            <option value="CNY">CNY - ¥ (China)</option>
                            <option value="CZK">CZK - Kč (Czech Republic)</option>
                            <option value="DKK">DKK - kr (Denmark)</option>
                            <option value="EUR">EUR - € (Eurozone)</option>
                            <option value="GBP">GBP - £ (United Kingdom)</option>
                            <option value="HKD">HKD - HK$ (Hong Kong)</option>
                            <option value="HUF">HUF - Ft (Hungary)</option>
                            <option value="IDR">IDR - Rp (Indonesia)</option>
                            <option value="ILS">ILS - ₪ (Israel)</option>
                            <option value="INR">INR - ₹ (India)</option>
                            <option value="ISK">ISK - kr (Iceland)</option>
                            <option value="JPY">JPY - ¥ (Japan)</option>
                            <option value="KRW">KRW - ₩ (South Korea)</option>
                            <option value="MXN">MXN - Mex$ (Mexico)</option>
                            <option value="MYR">MYR - RM (Malaysia)</option>
                            <option value="NOK">NOK - kr (Norway)</option>
                            <option value="NZD">NZD - $ (New Zealand)</option>
                            <option value="PHP">PHP - ₱ (Philippines)</option>
                            <option value="PLN">PLN - zł (Poland)</option>
                            <option value="RON">RON - lei (Romania)</option>
                            <option value="SEK">SEK - kr (Sweden)</option>
                            <option value="SGD">SGD - SGD (Singapore)</option>
                            <option value="THB">THB - ฿ (Thailand)</option>
                            <option value="TRY">TRY - ₺ (Turkey)</option>
                            <option value="USD" selected="selected">USD - $ (USA)</option>
                            <option value="ZAR">ZAR - R (South Africa)</option>
                        </select>
                        <br></br>
                        <br></br>
                        <h5>TO</h5>
                        <br></br>
                        <select
                            value={todenom}
                            onChange={(e) => setTodenom(e.target.value)}
                            className="form-select"
                        >
                            <option value="AUD">AUD - $ (Australia)</option>
                            <option value="BGN">BGN - лв (Bulgaria)</option>
                            <option value="BRL">BRL - R$ (Brazil)</option>
                            <option value="CAD">CAD - $ (Canada)</option>
                            <option value="CHF">CHF - CHF (Switzerland)</option>
                            <option value="CNY">CNY - ¥ (China)</option>
                            <option value="CZK">CZK - Kč (Czech Republic)</option>
                            <option value="DKK">DKK - kr (Denmark)</option>
                            <option value="EUR">EUR - € (Eurozone)</option>
                            <option value="GBP">GBP - £ (United Kingdom)</option>
                            <option value="HKD">HKD - HK$ (Hong Kong)</option>
                            <option value="HUF">HUF - Ft (Hungary)</option>
                            <option value="IDR">IDR - Rp (Indonesia)</option>
                            <option value="ILS">ILS - ₪ (Israel)</option>
                            <option value="INR">INR - ₹ (India)</option>
                            <option value="ISK">ISK - kr (Iceland)</option>
                            <option value="JPY">JPY - ¥ (Japan)</option>
                            <option value="KRW">KRW - ₩ (South Korea)</option>
                            <option value="MXN">MXN - Mex$ (Mexico)</option>
                            <option value="MYR">MYR - RM (Malaysia)</option>
                            <option value="NOK">NOK - kr (Norway)</option>
                            <option value="NZD">NZD - $ (New Zealand)</option>
                            <option value="PHP">PHP - ₱ (Philippines)</option>
                            <option value="PLN">PLN - zł (Poland)</option>
                            <option value="RON">RON - lei (Romania)</option>
                            <option value="SEK">SEK - kr (Sweden)</option>
                            <option value="SGD">SGD - SGD (Singapore)</option>
                            <option value="THB">THB - ฿ (Thailand)</option>
                            <option value="TRY">TRY - ₺ (Turkey)</option>
                            <option value="USD">USD - $ (USA)</option>
                            <option value="ZAR">ZAR - R (South Africa)</option>
                        </select>
                        <br />
                        <br></br>
                        <button type="submit" className="button-68">Submit</button>
                    </form>
                    {result ?
                    <div className="res">
                        <h2>{result}</h2>
                    </div>
                    : null}
                </div>
            </div>
        </div>
    );
}

export default Converter;
