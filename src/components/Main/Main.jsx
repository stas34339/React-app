import { useState } from 'react'
import './Main.css'
import { FiMessageCircle } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

function Main() {
    return (
        <main>
            <div className='container'>
                <div className='main-block'>
                    <div className='workplace'>
                        <form className='publish'>
                            <label className='avatar'>

                            </label>
                            <input type='text' placeholder="What's happening?"></input>
                            <button>tell</button>
                        </form>
                        <div className='tweets'>
                            <div className='tweet'>
                                <div className='avatar'>

                                </div>
                                <div className='tweet-place'>
                                    <div className='tweet-person'>
                                        <div className='username'>
                                            Kirill Borisyonok
                                        </div>
                                        <span>•</span>
                                        <div className='datetweet'>
                                            17 Feb 2022 20:00
                                        </div>
                                    </div>
                                    <div className='text'>
                                        <p>Студия Артемия Лебедева установила на въезде в Териберку стелу «в форме хвоста только что показавшегося из воды кита».</p>
                                    </div>
                                    <div className='btn-like'>
                                        <button><FiMessageCircle/></button>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <div className='tweet'>
                                <div className='avatar'>

                                </div>
                                <div className='tweet-place'>
                                    <div className='tweet-person'>
                                        <div className='username'>
                                            Kirill Borisyonok
                                        </div>
                                        <span>•</span>
                                        <div className='datetweet'>
                                            17 Feb 2022 20:00
                                        </div>
                                    </div>
                                    <div className='text'>
                                        <p>#Layzy Бывает сидишь на работе и думаешь: где же денег заработать?!</p>
                                        <img src='/Image.jpg'></img>
                                    </div>
                                    <div className='btn-like'>
                                        <button><FiMessageCircle/></button>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='load'>load more</button>
                    </div>
                    <div className='filter'>
                        <form className='filter-block'>
                            <h1>filters</h1>            
                            <label>Search tweets by author tittle</label>
                            <select>
                                <option disabled selected>Select author</option>
                                <option>Kirill Borisyonok</option>
                                <option>Kirill Borisyonok</option>
                            </select>
                            <div>
                                <label>Search tweets by date and time</label>
                                <div>
                                    <label>from</label><input placeholder='Enter start date'></input>
                                    <label>to</label><input placeholder='Enter end date'></input>
                                </div>
                                <div>
                                    <label>from</label><input placeholder='Start time'></input>
                                    <label>to</label><input placeholder='End time'></input>
                                </div>
                            </div>
                            <label>Search tweets by text</label>
                            <input placeholder='Enter searh text'></input>
                            <label>Search tweets by #tags</label>
                            <input placeholder='Enter search #tags'></input>
                            <div className='block-btn'>
                                <button className='filter-clear'>clear</button>
                                <button className='filter-search'>search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default Main;