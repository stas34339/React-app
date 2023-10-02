import classNames from 'classnames';
import s from './Tweet.module.scss'
import { FiMessageCircle } from "react-icons/fi";

function Tweet() {
    return (
      <main className={s.tweet}>
        <div className={s.tweet__container}>
            <div className={s.tweet__block}>
                <div className={s.tweet_message}>
                    <div className={classNames(s.tweet_message__avatar, s.avatar)}>

                    </div>
                    <div className={s.tweet_message__block}>
                        <div className={s.tweet_message__info}>
                            <div className={classNames(s.tweet_message__username, s.username)}>
                                Kirill Borisyonok
                            </div>
                            <span className={s.tweet_message__dot}>•</span>
                            <div className={classNames(s.tweet_message__date, s.date)}>
                                17 Feb 2022 <span>20:00</span>
                            </div>
                        </div>
                        <div className={s.tweet_message__text}>
                            <p>Студия Артемия Лебедева установила на въезде в Териберку стелу «в форме хвоста только что показавшегося из воды кита».</p>
                        </div>
                        <div className={s.tweet_message__interaction}>
                            <div className={s.tweet_message__btn_like}>
                                <button><FiMessageCircle/></button>
                                <span>0</span>
                            </div>
                            <div className={s.tweet_message__btn_control}>
                                <button className={s.tweet_message__btn_del}>Delete</button>
                                <button className={s.tweet_message__btn_edit}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.tweet_comment}>
                    <p className={classNames(s.tweet_comment__title, s.title)}>comments</p>
                    <div className={s.tweet_comment__item}>
                        <div className={classNames(s.tweet_comment__avatar, s.avatar)}>

                        </div>
                        <div className={s.tweet_comment__block}>
                            <div className={s.tweet_comment__info}>
                                <div className={classNames(s.tweet_comment__username, s.username)}>
                                    Alexandra Carpova
                                </div>
                                <div className={classNames(s.tweet_comment__date, s.date)}>
                                    17 Feb 2022 <span>20:00</span> 
                                </div>
                            </div>
                            <p className={s.tweet_comment__text}>
                                Круто... Нужно побывать))
                            </p>
                        </div>
                    </div>
                    <div className={s.tweet_comment__item}>
                        <div className={classNames(s.tweet_comment__avatar, s.avatar)}>

                        </div>
                        <div className={s.tweet_comment__block}>
                            <div className={s.tweet_comment__info}>
                                <div className={classNames(s.tweet_comment__username, s.username)}>
                                    Алексей Ильютик
                                </div>
                                <div className={classNames(s.tweet_comment__date, s.date)}>
                                    18 Feb 2022 <span>22:00</span>
                                </div>
                            </div>
                            <p className={s.tweet_comment__text}>
                                Я  был, очень хорошо выглядит. Всем советую посетить!
                            </p>
                        </div>
                    </div>
                    <div className={s.tweet_comment__item}>
                        <div className={classNames(s.tweet_comment__avatar, s.avatar)}>

                        </div>
                        <div className={s.tweet_comment__block}>
                            <div className={s.tweet_comment__info}>
                                <div className={classNames(s.tweet_comment__username, s.username)}>
                                    Arlinka
                                </div>
                                <div className={classNames(s.tweet_comment__date, s.date)}>
                                    18 Feb 2022 <span>10:00</span>
                                </div>
                            </div>
                            <p className={s.tweet_comment__text}>
                                Превосходное зрелище. Каждому дизайнеру стоит посетить данную прелесть. Хочу сказать, что это было изумительно;)
                            </p>
                        </div>
                    </div>
                    <div className={s.tweet_add}>
                        <p className={classNames(s.tweet_add__title, s.title)}>your comment</p>
                        <form className={s.tweet_add__form}>
                            <div className={s.tweet_add__block}>
                                <div className={classNames(s.tweet_add__avatar, s.avatar)}>
                                
                                </div>
                                <input className={s.tweet_add__input} type="text" placeholder='Enter your comment' />
                            </div>
                            <button className={s.tweet_add__btn}>add</button>
                            <button className={s.tweet_add__btn_active}>add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
  }
  
  export default Tweet;