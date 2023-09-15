import {BsSearch , BsNut } from 'react-icons/bs'
import {HiOutlineBellAlert } from 'react-icons/hi2'
import perfil from './img/perfil.jpg'
import './search.css'
import {  FaBarsProgress} from 'react-icons/fa6'
const search = () => {
  return (
    <div>
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
                                <BsNut className='user__icon'/>
                            </div>    
                        </div> 
                    </div>
            </div>
    </div>
  )
}

export default search