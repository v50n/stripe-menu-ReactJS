import React, {useState, useContext} from 'react';

const Context = React.createContext();

const AppProvider = ({children}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () =>{
        setIsOpenModal(true)
    }
    const handleCloseModal = () =>{
        setIsOpenModal(false)
    }

    return(
        <Context.Provider value={{
            isOpenModal,
            handleCloseModal,
            handleOpenModal,
        }}>
            {children}
        </Context.Provider>
    )
}
const GetCurrentValContext = () =>{
    const ValueContext = useContext(Context);
    return ValueContext
}


export {AppProvider, Context, GetCurrentValContext};