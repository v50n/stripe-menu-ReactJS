import logo from './../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import '../css/navbar.css';


const Navbar = () =>{
    const handleOnCLick = () =>{
        console.log("alo here")
    }
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-item">
                <div className="sub-menu-product">Products</div>
                <div className="sub-menu-developer">developers</div>
                <div className="sub-menu-company">company</div>
            </div>
            <div className="nav-action">
                <button className="btn-signIn">Sign in</button>
                <FaBars className="btn-toogleMenu" onClick={handleOnCLick}></FaBars>
            </div>
        </nav>
    )
}; 

export default Navbar;