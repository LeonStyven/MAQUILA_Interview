import React from "react";
import PromiseItem from "../atoms/promiseItem";
import bag from '../../../assets/promise/bag.svg'
import locator from '../../../assets/promise/locator.svg'
import service from '../../../assets/promise/service.svg'
import shipping from '../../../assets/promise/shipping.svg'


const PromisesBanner : React.FC = () => {

    const promises = [
        {
            icon: shipping,
            title: 'ENVÍO GRATUITO',
            text: 'Envío gratis a partir de $150.000 a todo el país'
        },
        {
            icon: service,
            title: 'ATENCIÓN AL CLIENTE',
            text: 'Nuestro equipo estará disponible para ayudarte cuando lo necesites'
        },
        {
            icon: bag,
            title: 'FÁCIL DEVOLUCIÓN',
            text: 'Puedes realizar el proceso de devolución o cambio de tu producto fácil'
        },
        {
            icon: locator,
            title: 'SEGUIMIENTO DE PEDIDO',
            text: 'Cuando realizas tu compra envíamos el número de guía para que puedas rastrearlo'
        }
    ]

    return (
        <div style={{backgroundColor: '#efeff1'}} className="flex justify-center gap-8 py-8 text-black w-full">
            {promises.map((promise, index) => (
                <PromiseItem 
                    key={index}
                    icon={promise.icon}
                    title={promise.title}
                    text={promise.text}
                />
            ))}
        </div>
    );
};

export default PromisesBanner