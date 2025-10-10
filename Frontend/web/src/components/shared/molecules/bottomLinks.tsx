import React from "react";
import sicLogo from '../../../assets/footer/icon-sic.svg'

const BottomLinks : React.FC = () => {
    return (
        <div className="flex w-full px-40 justify-between text-black items-center">
            <ul className="flex gap-4 items-center text-black">
                <li style={{borderRight: '1px solid gray'}} className="pr-2">Terminos y Condiciones</li>
                <li style={{borderRight: '1px solid gray'}} className="pr-2">Promociones Vigentes</li>
                <li style={{borderRight: '1px solid gray'}} className="pr-2">Política de privacidad</li>
                <li style={{borderRight: '1px solid gray'}} className="pr-2">Términos Recoge en tienda</li>
                <li style={{borderRight: '1px solid gray'}} className="pr-2">Habeas data</li>
                <li className="px-2">
                    <img src={sicLogo} alt="" />
                </li>
            </ul>
            <span className="text-gray-700 text-xs">© 2024 MIC. Todos los derechos reservados.</span>
        </div>
        
    );
};

export default BottomLinks