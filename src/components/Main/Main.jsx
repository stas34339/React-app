import s from './Main.module.scss'
import './Select.scss'
import { FiMessageCircle } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs"
import Select from 'react-select'
import classNames from 'classnames';


function Main() {
    const options = [
        { value: 'Kirill Borisyonok', label: 'Kirill Borisyonok' },
        { value: 'Denis Peskov', label: 'Denis Peskov' },
        { value: 'Arlinka', label: 'Arlinka' }
      ]
const MySelect = () =>(
    <Select options={options}
        placeholder = 'Select author'
        className='select-container'
        classNamePrefix='select'
    />
)
    return (
        <main className={s.main}>
            <div className={s.main__container}>
                <div className={s.main__block}>
                    <form className={s.main_form_share}>
                        <div className={s.main_form_share__sub}>
                            <div className={s.main_form_share__avatar}>

                            </div>
                            <input className={s.main_form_share__input} type='text' placeholder="What's happening?"></input>
                        </div>
                        <button className={s.main_form_share__btn}>tell</button>
                    </form>
                    <div className={s.main__tweets}>
                        <div className={s.main_item}>
                            <div className={s.main_item__avatar}>

                            </div>
                            <div className={s.main_item__tweet}>
                                <div className={s.main_item__info}>
                                    <div className={s.main_item__username}>
                                        Kirill Borisyonok
                                    </div>
                                    <span>•</span>
                                    <div className={s.main_item__datetweet}>
                                        17 Feb 2022 20:00
                                    </div>
                                </div>
                                <div className={s.main_item__text}>
                                    <p>Студия Артемия Лебедева установила на въезде в Териберку стелу «в форме хвоста только что показавшегося из воды кита».</p>
                                </div>
                                <div className={s.main_item__interaction}>
                                    <div className={s.main_item__btn_like}>
                                        <button><FiMessageCircle/></button>
                                        <span>0</span>
                                    </div>
                                    <div className={classNames(s.main_item__block_btn, s.main_item__block_btn_active)}>
                                        <button className={s.main_item__btn_del}>Delete</button>
                                        <button className={s.main_item__btn_edit}>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.main_item}>
                            <div className={s.main_item__avatar}>

                            </div>
                            <div className={s.main_item__tweet}>
                                <div className={s.main_item__info}>
                                    <div className={s.main_item__username}>
                                        Denis Peskov
                                    </div>
                                    <span>•</span>
                                    <div className={s.main_item__datetweet}>
                                        17 Feb 2022 20:00
                                    </div>
                                </div>
                                <div className={s.main_item__text}>
                                    <p>#Layzy Бывает сидишь на работе и думаешь: где же денег заработать?!</p>
                                    <img src='public\assets\Image.jpg'></img>
                                </div>
                                <div className={s.main_item__interaction}>
                                    <div className={s.main_item__btn_like}>
                                        <button><FiMessageCircle/></button>
                                        <span>0</span>
                                    </div>
                                    <div className={s.main_item__block_btn}>
                                    <button className={s.main_item__btn_del}>Delete</button>
                                        <button className={s.main_item__btn_edit}>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={s.main__load}>load more</button>
                </div>
                <div className={s.main__filter}>
                    <form className={s.main_form_filter}>
                        <h1 className={s.main_form_filter__title}>filters</h1>            
                        <label className={s.main_form_filter__label}>Search tweets by author tittle</label>
                        <MySelect />
                        <div className={s.main_form_filter__block02}>
                            <label className={s.main_form_filter__label}>Search tweets by date and time</label>
                            <div className={s.main_form_filter__date}>
                                <label className={s.main_form_filter__label}>from</label><input className={s.main_form_filter__input} placeholder='Enter start date'></input>
                                <label className={s.main_form_filter__label}>to</label><input className={s.main_form_filter__input} placeholder='Enter end date'></input>
                            </div>
                            <div className={s.main_form_filter__time}>
                                <label className={s.main_form_filter__label}>from</label><input className={s.main_form_filter__input} placeholder='Start time'></input>
                                <label className={s.main_form_filter__label}>to</label><input className={s.main_form_filter__input} placeholder='End time'></input>
                            </div>
                        </div>
                        <label className={s.main_form_filter__label}>Search tweets by text</label>
                        <input className={s.main_form_filter__input} placeholder='Enter searh text'></input>
                        <label className={s.main_form_filter__label}>Search tweets by #tags</label>
                        <input className={s.main_form_filter__input} placeholder='Enter search #tags'></input>
                        <div className={s.main_form_filter__block_btn}>
                            <button className={s.main_form_filter__btn_clear}>clear</button>
                            <button className={s.main_form_filter__btn_search}>search</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
  }
  
  export default Main;