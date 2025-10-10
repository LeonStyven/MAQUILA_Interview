import React from "react";

const HelpList : React.FC = () => {
    return (
        <div className="flex flex-col text-gray-700">
            <h6 className="underline font-bold text-black mb-2">AYUDA</h6>
            <ul className="flex flex-col">
                <li className="mt-2">
                    <span>Preguntas Frecuentes</span>
                </li>
                <li className="mt-2">
                    <span>Mis Pedidos</span>
                </li>
                <li className="mt-2">
                    <span>Sigue tu pedido</span>
                </li>
                <li className="mt-2">
                    <span>Cambios y devoluciones</span>
                </li>
                <li className="mt-2">
                    <span>Garantía de producto</span>
                </li>
                <li className="mt-2">
                    <span>Retracto de compra</span>
                </li>
                <li className="mt-2">
                    <span>Modificar mi suscripción</span>
                </li>
            </ul>
        </div>
    );
};

export default HelpList