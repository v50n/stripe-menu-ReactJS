import {useState} from 'react';
import {FaTimes} from 'react-icons/fa'

const SubMenu = () =>{
    const [isFullSubMenu, setIsFullSubMenu] = useState(true);
    if(isFullSubMenu){
        return (
            <div className="modal">
                
                <div className="modal-content">
                    <FaTimes className="close"></FaTimes>
                    <p>Some text in the Modal..</p>
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