import { useState, useEffect } from 'react';
import React from 'react'
import './api.css';


function App() {

  const [users, setUsers] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
      fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-12-13&sortBy=publishedAt&apiKey=583113221428477f8dc41215bfb30f23`)
      .then(res => res.json())
      .then(users => setUsers(users.articles))

  }, [])



  return (
        <div className="App">
            <div className='container'>
                <h1 className='heading'>BE AWARE OF HOT NEWS</h1>   
                <input onChange={(e) => setInputValue(e.currentTarget.value.trim())} className='input'/>


                <div className="cards">
                    {
                        users.filter(item => {
                            if (inputValue=="") {
                                return item
                            } else if (item.title.toLowerCase().includes(inputValue.toLowerCase())) {
                                return item
                            }
                        }).map((item, index) => {
                            return (
                                <div className='card' key={index}>
                                    <img className='img' src={item.urlToImage} width={430} height={250} alt="" />
                                    <h3 className='title'>Title: {item.title}</h3>
                                    <p className='author'> Author: {item.author}</p>
                                    <p className='content'>Content: {item.content}</p>
                                </div>
                    
                            )
                        })
                    }
                </div>
            </div>
        </div>  
    );
}

export default App;
