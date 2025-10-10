import React from "react";
import email from '../../../assets/contact/icon-email-white.svg'

const NewslatterBanner : React.FC = () => {
    return (
        <div style={{borderBottom: '1px solid gray'}} className="w-full flex justify-around">
            <div className="flex text-black my-20 w-1/2">
                <h6 className="font-bold w-1/2 text-2xl">SUSCRÍBETE A NUESTRO NEWSLATTER Y RECIBE 20% OFF EN TU PRIMERA COMPRA.</h6>
                <div className="flex flex-col w-1/2">
                    <p className="text-gray-700">Todas las novedades, lanzamientos, descuentos exclusivos y mucho más.</p>
                    <button className="flex bg-red-500 py-4 w-full justify-center gap-4 text-white">
                        <img src={email} alt="" />
                        <p>SUSCRIBIRME</p>
                    </button>
                </div>
            </div>
        </div>
        
        
    );
};

export default NewslatterBanner