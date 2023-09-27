import './Tweet.scss'
import './Tweet-extention.scss'
import { FiMessageCircle } from "react-icons/fi";

function Tweet() {
    return (
      <main className='tweet'>
        <div className="tweet__container">
            <div className="tweet__block">
                <div className="tweet-message">
                    <div className="tweet-message__avatar avatar">

                    </div>
                    <div className="tweet-message__block">
                        <div className="tweet-message__info">
                            <div className="tweet-message__username username">
                                Kirill Borisyonok
                            </div>
                            <span className='tweet-message__dot'>•</span>
                            <div className="tweet-message__date date">
                                17 Feb 2022 <span>20:00</span>
                            </div>
                        </div>
                        <div className="tweet-message__text">
                            <p>Студия Артемия Лебедева установила на въезде в Териберку стелу «в форме хвоста только что показавшегося из воды кита».</p>
                        </div>
                        <div className="tweet-message__interaction">
                            <div className="tweet-message__btn-like">
                                <button><FiMessageCircle/></button>
                                <span>0</span>
                            </div>
                            <div className="tweet-message__btn-control">
                                <button className='tweet-message__btn-del'>Delete</button>
                                <button className='tweet-message__btn-edit'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tweet-comment">
                    <p className='tweet-comment__title title'>comments</p>
                    <div className="tweet-comment__item">
                        <div className='tweet-comment__avatar avatar'>

                        </div>
                        <div className="tweet-comment__block">
                            <div className='tweet-comment__info'>
                                <div className='tweet-comment__username username'>
                                    Alexandra Carpova
                                </div>
                                <div className='tweet-comment__date date'>
                                    17 Feb 2022 <span>20:00</span> 
                                </div>
                            </div>
                            <p className="tweet-comment__text">
                                Круто... Нужно побывать))
                            </p>
                        </div>
                    </div>
                    <div className="tweet-comment__item">
                        <div className='tweet-comment__avatar avatar'>

                        </div>
                        <div className="tweet-comment__block">
                            <div className='tweet-comment__info'>
                                <div className='tweet-comment__username username'>
                                    Алексей Ильютик
                                </div>
                                <div className='tweet-comment__date date'>
                                    18 Feb 2022 <span>22:00</span>
                                </div>
                            </div>
                            <p className="tweet-comment__text">
                                Я  был, очень хорошо выглядит. Всем советую посетить!
                            </p>
                        </div>
                    </div>
                    <div className="tweet-comment__item">
                        <div className='tweet-comment__avatar avatar'>

                        </div>
                        <div className="tweet-comment__block">
                            <div className='tweet-comment__info'>
                                <div className='tweet-comment__username username'>
                                    Arlinka
                                </div>
                                <div className='tweet-comment__date date'>
                                    18 Feb 2022 <span>10:00</span>
                                </div>
                            </div>
                            <p className="tweet-comment__text">
                                Превосходное зрелище. Каждому дизайнеру стоит посетить данную прелесть. Хочу сказать, что это было изумительно;)
                            </p>
                        </div>
                    </div>
                    <div className="tweet-add">
                        <p className='tweet-add__title title'>your comment</p>
                        <form className="tweet-add__form">
                            <div className="tweet-add__block">
                                <div className="tweet-add__avatar avatar">
                                
                                </div>
                                <input className='tweet-add__input' type="text" placeholder='Enter your comment' />
                            </div>
                            <button className="tweet-add__btn">add</button>
                            <button className='tweet-add__btn-active'>add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default Tweet;