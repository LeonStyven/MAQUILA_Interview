import React from "react";

interface ProductDescriptionProps {
    brand: string;
    title: string;
    originalPrice: number;
    discountedPrice: number
}

const ProductDescription : React.FC<ProductDescriptionProps> = ({
    brand,
    title,
    originalPrice,
    discountedPrice
}) => {
    return (
        <div className="flex flex-col text-black gap-1">
            <span className="font-bold font-sx text-gray-500">{brand}</span>
            <h3 className="font-lg font-medium mt-2 truncate">{title}</h3>
            <div className="flex flex-row gap-2">
                <span className="line-through text-gray-400">${originalPrice}</span>
                <span className="font-semibold ">${discountedPrice}</span>
            </div>
        </div>  

    );
};

export default ProductDescription