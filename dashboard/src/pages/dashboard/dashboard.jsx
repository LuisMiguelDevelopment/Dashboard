import './dashboard.css'
import { AiFillCheckCircle} from 'react-icons/ai'
import {IoIosCash } from 'react-icons/io'
import { BsThreeDots} from 'react-icons/bs'
import { AiOutlineShop} from 'react-icons/ai'
import estadisticas from './img/estadisticas.png'

const dashboard = () => {

  return (
    <div className='general'>
       <main className="main">  
            <section className="section1">
                <div className="central">
                    <div className="central__header">
                        <div className="central__card central__card--purple">
                            <div className="central__buttonOptions">
                                <BsThreeDots/>
                            </div>
                            <div className="central__button">
                                <IoIosCash/>
                            </div>
                            <div className="central__price">
                                <div className="central__valores">
                                    <h2 className="central__h2">$5000.00</h2>
                                    <div className="central__buttonUp">
                                        <AiFillCheckCircle />
                                    </div> 
                                </div>
                                <span className="central__span">Total Earning</span>
                            </div>
                        </div>
                        <div className="central__card central__card--blue">
                            <div className="central__buttonOptions">
                                <BsThreeDots/>
                            </div>
                            <div className="central__button">
                                <IoIosCash/>
                            </div>
                            <div className="central__price">
                                <div className="central__valores">
                                    <h2 className="central__h2">$5000.00</h2>
                                    <div className="central__buttonUp">
                                        <AiFillCheckCircle />
                                    </div> 
                                </div>
                                <span className="central__span">Total Earning</span>
                            </div>
                        </div>
                    </div>

                    <div className="estadisticas">
                        <div className="estadisticas__header">
                            <div className="estadisticas__growth">
                                <span className="estadisticas__span">Total growth</span>
                                <span className="estaditicas__price">$2,324.00</span>
                            </div>
                            <a href="" className="estaditicas__button">today</a>
                        </div>
                        <img src={estadisticas}alt="" className="estadisticas__img" />
                    </div>
                </div>

                <div className="lateral__izquierdo">
                    <div className="lateral__header">
                        <div className="lateral__card  lateral__card--azul">
                            <div className="lateral__icon">
                                <AiOutlineShop className='lateral__icon2 '/>
                            </div>
                            <div className="lateral__info lateral__info--azul">
                                <span className="lateral__price">$203k</span>
                                <span className="lateral__infoo">Total Income</span>
                            </div>
                        </div>
                        <div className="lateral__card  lateral__card--yellow">
                            <div className="lateral__icon lateral__icon2--yellow">
                                <AiOutlineShop className='lateral__icon2'/>
                            </div>
                            <div className="lateral__info">
                                <span className="lateral__price">$203k</span>
                                <span className="lateral__infoo">Total Income</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
       </main>
       

    </div>
  )
}

export default dashboard