import React from "react";

const ShopButton : React.FC = () => {
    return (
        <button 
            className="
                border 
                font-bold 
                text-sm 
                px-16 
                py-2 
                w-full 
                box-border 
                border-red-500 
                text-red-500 transition 
                hover:bg-red-500 
                hover:text-white
            ">AGREGAR A MI BOLSA
        </button>
    );
};

export default ShopButton