import React from "react";
import closeIcon from '../../../assets/nav/close.svg'

type Props = { onclose?: () => void };

const SideNavTitle : React.FC<Props> = ({ onclose }) => {
    return (
        <div style={{borderBottom: '1px solid gray'}} className="flex w-full justify-between px-4 py-4">
            <h6 className="font-bold text-lg">MI BOLSA DE COMPRAS</h6>
            <button className="button cursor-pointer" onClick={onClose} aria-label="Cerrar Carrito">
                <img className="w-[24px]" src={closeIcon} alt="Cerrar" />
            </button>
        </div>
    );
};

export default SideNavTitle