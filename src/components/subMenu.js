import {FaTimes} from 'react-icons/fa';
import {useState} from 'react'
import '../css/subMenu.css';
import sublinks from '../data';
import {GetCurrentValContext} from '../context/AppContext'

const SubMenu = () =>{
    const [isFullSubMenu, setIsFullSubMenu] = useState(true);

    const {isOpenModal,handleCloseModal} = GetCurrentValContext();

    if(isFullSubMenu){
        return (
            <div className={ isOpenModal ? "modal modal-display" :  "modal"}>
                
                <div className="modal-content">
                    <FaTimes className="close" onClick={handleCloseModal}></FaTimes>
                    <div className="subMenu">
                    {
                        sublinks.map((item,index) => {
                            return(
                                <div key={index}>
                                <h5 className="item-page">{item.page}</h5>
                                    <ul className="subMenu-item">
                                        {
                                            item.links.map((link, index) => <li key={index}>
                                            <a href={link.url}><span className="item-icon">{link.icon}</span> {link.label}</a></li>)
                                        }

                                    </ul>
                            </div>
                            )
                        })
                    }
                    </div>


                </div>
            </div>
        )
    }else{
        return (
            <div className="modal">
                detail menu
            </div>
        )
    }
}

export default SubMenu;