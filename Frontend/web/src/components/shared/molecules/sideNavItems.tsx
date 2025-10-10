import React from "react";
import ProductCountStepper from "../atoms/productCountStepper";

const SideNavItems : React.FC = () => {

    const items = [
        {
            image: 'https://moviesshopco.vteximg.com.br/arquivos/ids/177739/238249-camiseta-hombre-one-piece-camiseta-iconica-1.jpg?v=638664382146500000',
            brand: 'DRAGON BALL',
            productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            unitsAvailable: 5,
            originalPrice: 94990,
            discountPrice: 75992
        },
        {
            image: 'https://moviesshopco.vteximg.com.br/arquivos/ids/177739/238249-camiseta-hombre-one-piece-camiseta-iconica-1.jpg?v=638664382146500000',
            brand: 'DRAGON BALL',
            productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            unitsAvailable: 5,
            originalPrice: 94990,
            discountPrice: 75992
        }
    ]

    return (
        
        <div className="flex flex-col mt-8 h-fit w-full ml-4">
            {
                items.map((item, index) => {
                    return(
                        <div className="flex mb-4 border-b-1 border-gray-300">
                            <img className="w-1/3 object-cover p-4" key={index} src={item.image} alt={item.productName} />
                            <div className="product-description ml-8 w-2/3 pr-8 pt-4">
                                <div className="flex w-6/7 justify-between">
                                    <span className="text-gray-400 font-light text-base">{item.brand}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#99a1af"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z"/></svg>
                                </div>
                                <div className="flex font-medium pr-8">
                                    <p className="truncate">{item.productName}</p>
                                </div>
                                <div className="flex pr-8 items-center mt-4">
                                    <div className="container">
                                        <ProductCountStepper minValue={1} maxValue={5}/>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <span className="text-base text-gray-400 font-light line-through">{`$${item.originalPrice}`}</span>
                                        <span className="text-base font-bold">{`$${item.discountPrice}`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


{/*             
            <div className="product-description">
                <ProductCountStepper minValue={1} maxValue={5}/>
            </div> */}
        </div>
        
    );
};

export default SideNavItems