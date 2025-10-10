import React from "react";

const AboutList : React.FC = () => {
    return (
        <div className="flex flex-col text-gray-700">
            <h6 className="underline font-bold text-black mb-2">EMPRESA</h6>
            <ul className="flex flex-col">
                <li className="mt-2">
                    <span>Quienes Somos</span>
                </li>
                <li className="mt-2">
                    <span>Localizador de tiendas</span>
                </li>
                <li className="mt-2">
                    <span>Trabaja con nosotros</span>
                </li>
                <li className="mt-2">
                    <span>Linea de transparencia y ética empresarial</span>
                </li>
                <li className="mt-2">
                    <span>Sitemap</span>
                </li>
            </ul>
        </div>
    );
};

export default AboutList