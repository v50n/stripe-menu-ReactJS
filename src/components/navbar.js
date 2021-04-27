import logo from './../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import '../css/navbar.css';
import {GetCurrentValContext} from '../context/AppContext';
import sublinks from '../data';


const Navbar = () =>{
    const {handleOpenModal} = GetCurrentValContext();
    const handleMouseEnter = (e) =>{
        console.log(e.target.id)
    }
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-item">
                {
                    sublinks.map((item,index)=><div className="sub-menu" key={index} id={index}  onMouseEnter={handleMouseEnter}>{item.page}</div>)
                }
            </div>
            <div className="nav-action">
                <button className="btn-signIn">Sign in</button>
                <FaBars className="btn-toogleMenu" onClick={handleOpenModal}></FaBars>
            </div>
        </nav>
    )
}; 

export default Navbar;