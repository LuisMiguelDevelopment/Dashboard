import './dashboard.css'
import logo from './img/logo.png'
import {FaBarsStaggered , FaBarsProgress} from 'react-icons/fa6'
import {AiFillDashboard} from 'react-icons/ai'
import {BsSearch, } from 'react-icons/bs'

const dashboard = () => {
  return (
    <div className='general'>
        <header className="header">
            <div className="header__cabecera">
                <div className="header__logo">
                    <img src={logo} alt="" className="header__logo--img" />
                    <h2 className='header__titulologo'>BERRY</h2>
                </div>     
                <div className="header__bars">
                    <FaBarsStaggered/>
                </div>      
            </div>
            <div className="header__body">
                <div className=" header__items header__items--dashboard ">
                    <h2 className="header__h2">Dashboard</h2>
                    <button className="header__button">
                        <div className="header__iconItems">
                            <AiFillDashboard/>
                        </div>
                        <span>Dashboard</span>
                    </button>
                </div>
                <div className=" header__items header__items--Pages">
                    <h2 className="header__h2">Pages</h2>
                    <span className='header__span--pages'>Page Caption</span>
                    <button className="header__button">
                        <span>Authentication</span>
                    </button>
                </div>
                <div className=" header__items header__items--utilities">
                    <h2 className="header__h2">Utilities</h2>
                    <button className="header__button">
                        <span>Typography</span>
                    </button>
                    <button className="header__button">
                        <span>Color</span>
                    </button>
                    <button className="header__button">
                        <span>Shadow</span>
                    </button>
                    <button className="header__button">
                        <span>icons</span>
                    </button>
                </div>
                <div className="header__items header__items--config">
                    <button className="header__button">
                        <span>Sample Page</span>
                    </button>
                    <button className="header__button">
                        <span>Documentation</span>
                    </button>
                </div>
            </div>       
        </header>
        <main className="main">
            <div className="barra__superior">
                <form className='barra__form' action="">
                     <BsSearch/>
                    <input className='barra__input' type="text" placeholder='search'/>
                    <FaBarsProgress/>
                </form>
            </div>
        </main>
       
    </div>
  )
}

export default dashboard