import React from "react";
import chatIcon from '../../../assets/contact/icon-chat.svg'
import callIcon from '../../../assets/contact/icon-call.svg'
import emailIcon from '../../../assets/contact/icon-chat.svg'
import locator from '../../../assets/contact/icon-locator-footer.svg'

const ContactList : React.FC = () => {
    return (
        <div className="flex flex-col text-gray-700">
            <h6 className="underline font-bold text-black mb-2">CONTACTO</h6>
            <ul className="flex flex-col">
                <li className="flex gap-2 mt-2">
                    <img src={chatIcon} alt="" />
                    <span>Chat con un asesor whatsapp</span>
                </li>
                <li className="flex gap-2 mt-2">
                    <img src={callIcon} alt="" />
                    <span>Llamar +57 300 910 83 11</span>
                </li>
                <li className="flex gap-2 mt-2">
                    <img src={emailIcon} alt="" />
                    <span>Escribir un correo</span>
                </li>
                <li className="flex gap-2 mt-8">
                    <img src={locator} alt="" />
                    <span className="font-bold">LOCALIZADOR DE TIENDAS</span>
                </li>
            </ul>
        </div>
    );
};

export default ContactList