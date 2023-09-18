import { useState } from 'react'
import './Tweet.css'
import { FiMessageCircle } from "react-icons/fi";

function Tweet() {
    return (
      <main>
        <div className="container-tweet">
            <div className="tweet-block">
                <div className="tweet">
                    <div className="avatar">

                    </div>
                    <div className="tweet-place">
                        <div className="tweet-person">
                            <div className="username">
                                Kirill Borisyonok
                            </div>
                            <span>•</span>
                            <div className="datetweet">
                                17 Feb 2022 20:00
                            </div>
                        </div>
                        <div className="text">
                            <p>Студия Артемия Лебедева установила на въезде в Териберку стелу «в форме хвоста только что показавшегося из воды кита».</p>
                        </div>
                        <div className="btn-block">
                            <div className="btn-like">
                                <button><FiMessageCircle/></button>
                                <span>0</span>
                            </div>
                            <div className="btn-DelEd">
                                <button className='btn-del'>Delete</button>
                                <button className='btn-edit'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <p>comments</p>
                    <div className="comment">
                        <div className='avatar'>

                        </div>
                        <div className="comment-place">
                            <div className='tweet-person'>
                                <div className='username'>
                                    Alexandra Carpova
                                </div>
                                <div className='datecom'>
                                    17 Feb 2022 <span className="timecom">20:00</span> 
                                </div>
                            </div>
                            <p className="comtext">
                                Круто... Нужно побывать))
                            </p>
                        </div>
                    </div>
                    <div className="comment">
                        <div className='avatar'>

                        </div>
                        <div className="comment-place">
                            <div className='tweet-person'>
                                <div className='username'>
                                    Алексей Ильютик
                                </div>
                                <div className='datecom'>
                                    18 Feb 2022 <span className="timecom">22:00</span>
                                </div>
                            </div>
                            <p className="comtext">
                                Я  был, очень хорошо выглядит. Всем советую посетить!
                            </p>
                        </div>
                    </div>
                    <div className="comment">
                        <div className='avatar'>

                        </div>
                        <div className="comment-place">
                            <div className='tweet-person'>
                                <div className='username'>
                                    Arlinka
                                </div>
                                <div className='datecom'>
                                    18 Feb 2022 <span className="timecom">10:00</span>
                                </div>
                            </div>
                            <p className="comtext">
                                Превосходное зрелище. Каждому дизайнеру стоит посетить данную прелесть. Хочу сказать, что это было изумительно;)
                            </p>
                        </div>
                    </div>
                    <div className="addcom">
                        <p>your comment</p>
                        <div className="entcom">
                            <input type="text" placeholder='Enter your comment' />
                            <button>add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default Tweet;