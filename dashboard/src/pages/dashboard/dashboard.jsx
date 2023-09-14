import './dashboard.css'
import logo from './img/logo.png'
import perfil from './img/perfil.jpg'
import {FaBarsStaggered , FaBarsProgress} from 'react-icons/fa6'
import {AiFillDashboard ,AiOutlineChrome , AiOutlineQuestionCircle , AiFillCheckCircle} from 'react-icons/ai'
import {GoKey} from 'react-icons/go'
import {TbTypography ,TbShadow ,TbBrandGooglePhotos} from 'react-icons/tb'
import {IoColorPaletteOutline } from 'react-icons/io5'
import {IoIosCash } from 'react-icons/io'
import {BsSearch , BsNut , BsThreeDots} from 'react-icons/bs'
import {HiOutlineBellAlert } from 'react-icons/hi2'
import {GrUploadOption } from 'react-icons/gr'



const dashboard = () => {
  return (
    <div className='general'>
       <div className="navbar">
            <div className="navbar__header">
                <div className="navbar__logo">
                    <img src={logo} alt="" className="navbar__img" />
                    <h2 className="navbar__h2">BERRY</h2>
                </div>     
                <div className="navbar__bars">
                    <FaBarsStaggered className='navbar__bars--logo'/>
                </div>
            </div>
            <div className="vertical">
                <div className="vertical__seccion">
                    <span className="navbar__span">Dashboard</span>
                    <a href='' className="vertical__layout">
                        <AiFillDashboard/>
                        <span className='vertical__span'>Dashboard</span>
                    </a>
                </div>
                <div className="vertical__seccion">
                    <span className="navbar__span">Pages</span>
                    <span className='navbar__span navbar__span--small'>Pages Caption</span>
                    <a href='' className="vertical__layout">
                        <GoKey/>
                        <span className='vertical__span'>Authentication</span>
                    </a>
                </div>
                <div className="vertical__seccion">
                    <span className="navbar__span">Utilities</span>
                    <a href='' className="vertical__layout">
                        <TbTypography/>
                        <span className='vertical__span'>Typography</span>
                    </a>
                    <a href='' className="vertical__layout">
                        <IoColorPaletteOutline/>
                        <span className='vertical__span'>Color</span>
                    </a>
                    <a href='' className="vertical__layout">
                        <TbShadow/>
                        <span className='vertical__span'>Shadow</span>
                    </a>
                    <a href='' className="vertical__layout">
                        <TbBrandGooglePhotos/>
                        <span className='vertical__span'>Icons</span>
                    </a>
                </div>

                <div className="vertical__seccion">
                    <a href='' className="vertical__layout">
                        <AiOutlineChrome/>
                        <span className='vertical__span'>Sample Page</span>
                    </a>
                    <a href='' className="vertical__layout">
                        <AiOutlineQuestionCircle/>
                        <span className='vertical__span'>Documentation</span>
                    </a>
                </div>
            </div>
       </div>
       <main className="main">
            <div className="search">
                    <form action="" className="search__form">
                        <BsSearch className='search__icon'/>
                        <input type="text" className="search__input" placeholder='Search' />
                        <div className="search__bars">
                            <FaBarsProgress className='search__faBars'/>
                        </div>
                        
                    </form>
                    <div className="user">
                        <div className="user__config">
                            <div className="user__noti">
                                <HiOutlineBellAlert/>
                            </div>
                            <div className="user__element">
                                <img src={perfil} alt="" className="user__img" />
                                <BsNut/>
                            </div>    
                        </div> 
                    </div>
            </div>

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
            </div>

       </main>
       

    </div>
  )
}

export default dashboard