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
                        <div className="btn-like">
                            <button><FiMessageCircle/></button>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default Tweet;