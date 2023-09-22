import { useState } from 'react'
import './Main.scss'
import './Main-extention.scss'
import { FiMessageCircle } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs"

function Main() {
    return (
        <main className='main'>
            <div className='main__container'>
               
                <div className='main__block'>
                    <form className='form-share'>
                        <div className="form-share__sub">
                            <div className='form-share__avatar'>

                            </div>
                            <input className='form-share__input' type='text' placeholder="What's happening?"></input>
                        </div>
                        <button className='form-share__btn'>tell</button>
                    </form>
                    <div className='main__tweets'>
                        <div className='main-item'>
                            <div className='main-item__avatar'>

                            </div>
                            <div className='main-item__tweet'>
                                <div className='main-item__info'>
                                    <div className='main-item__username'>
                                        Kirill Borisyonok
                                    </div>
                                    <span>•</span>
                                    <div className='main-item__datetweet'>
                                        17 Feb 2022 20:00
                                    </div>
                                </div>
                                <div className='main-item__text'>
                                    <p>Студия Артемия Лебедева установила на въезде в Териберку стелу «в форме хвоста только что показавшегося из воды кита».</p>
                                </div>
                                <div className="main-item__interaction">
                                    <div className="main-item__btn-like">
                                        <button><FiMessageCircle/></button>
                                        <span>0</span>
                                    </div>
                                    <div className="main-item__block-btn main-item__block-btn-active">
                                        <button className='main-item__btn-del'>Delete</button>
                                        <button className='main-item__btn-edit'>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='main-item'>
                            <div className='main-item__avatar'>

                            </div>
                            <div className='main-item__tweet'>
                                <div className='main-item__info'>
                                    <div className='main-item__username'>
                                        Denis Peskov
                                    </div>
                                    <span>•</span>
                                    <div className='main-item__datetweet'>
                                        17 Feb 2022 20:00
                                    </div>
                                </div>
                                <div className='main-item__text'>
                                    <p>#Layzy Бывает сидишь на работе и думаешь: где же денег заработать?!</p>
                                    <img src='/Image.jpg'></img>
                                </div>
                                <div className="main-item__interaction">
                                    <div className='main-item__btn-like'>
                                        <button><FiMessageCircle/></button>
                                        <span>0</span>
                                    </div>
                                    <div className="main-item__block-btn">
                                        <button className='main-item__btn-del'>Delete</button>
                                        <button className='main-item__btn-edit'>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='main__load'>load more</button>
                </div>
                <div className="main__filter">
                    <form className='form-filter'>
                        <h1 className='form-filter__title'>filters</h1>            
                        <label className='form-filter__label'>Search tweets by author tittle</label>
                        <select className='form-filter__author'>
                            <option disabled selected>Select author</option>
                            <option>Kirill Borisyonok</option>
                            <option>Kirill Borisyonok</option>
                        </select>
                        <div className='form-filter__block02'>
                            <label className='form-filter__label'>Search tweets by date and time</label>
                            <div className='form-filter__date'>
                                <label className='form-filter__label'>from</label><input className='form-filter__input' placeholder='Enter start date'></input>
                                <label className='form-filter__label'>to</label><input className='form-filter__input' placeholder='Enter end date'></input>
                            </div>
                            <div className='form-filter__time'>
                                <label className='form-filter__label'>from</label><input className='form-filter__input' placeholder='Start time'></input>
                                <label className='form-filter__label'>to</label><input className='form-filter__input' placeholder='End time'></input>
                            </div>
                        </div>
                        <label className='form-filter__label'>Search tweets by text</label>
                        <input className='form-filter__input' placeholder='Enter searh text'></input>
                        <label className='form-filter__label'>Search tweets by #tags</label>
                        <input className='form-filter__input' placeholder='Enter search #tags'></input>
                        <div className='form-filter__block-btn'>
                            <button className='form-filter__btn-clear'>clear</button>
                            <button className='form-filter__btn-search'>search</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
  }
  
  export default Main;