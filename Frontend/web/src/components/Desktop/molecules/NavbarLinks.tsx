import React from "react";

const NavbarLinks: React.FC = () => {
    return (
        <div className="flex flex-row gap-10 font-semibold w-full justify-center">
            <div className="flex flex-col flex-1 text-center cursor-pointer">
                <span className="text-white">MUJER</span>
                <span></span>
            </div>
            <div className="flex flex-col flex-1 text-center cursor-pointer">
                <span className="text-white">HOMBRE</span>
                <span></span>
            </div>
            <div className="flex flex-col flex-1 text-center cursor-pointer">
                <span className="text-white">NUEVO</span>
                <span className="text-xs font-light whitespace-nowrap">Lanzamientos</span>
            </div>
            <div className="flex flex-col flex-1 text-center cursor-pointer">
                <span className="text-red-500">OFERTAS</span>
                <span className="text-xs font-light whitespace-nowrap">De Temporada</span>
            </div>
            <div className="flex flex-col flex-1 text-center cursor-pointer">
                <span className="text-white">PERSONAJES</span>
                <span className="text-xs font-light whitespace-nowrap">Licencias</span>
            </div>
        </div>
        
    );
};

export default NavbarLinks