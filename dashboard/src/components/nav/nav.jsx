import './nav.css'
import logo from './img/logo.png'
import {FaBarsStaggered } from 'react-icons/fa6'
import {AiFillDashboard ,AiOutlineChrome , AiOutlineQuestionCircle  } from 'react-icons/ai'
import {GoKey} from 'react-icons/go'
import {TbTypography ,TbShadow ,TbBrandGooglePhotos} from 'react-icons/tb'
import {IoColorPaletteOutline } from 'react-icons/io5'



const nav = () => {
  return (
    <div>
         <nav className="nav">
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
           
        </nav>
    </div>
  )
}

export default nav