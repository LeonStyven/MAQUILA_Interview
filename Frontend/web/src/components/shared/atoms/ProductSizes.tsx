import React from "react";

const ProductSizes : React.FC = () => {
    return (
        <div className="bg-amber-300">
            <ol className="flex flex-row justify-center gap-2 py-2 mx-2 my-2">
                <li className="bg-black text-white p-1 h-8 w-8 text-center">XS</li>
                <li className="border border-solid border-black p-1 h-8 w-8 text-center">S</li>
                <li className="border border-solid border-black p-1 h-8 w-8 text-center">M</li>
                <li className="border border-solid border-black p-1 h-8 w-8 text-center">L</li>
                <li className="border border-solid border-black p-1 h-8 w-8 text-center">XL</li>
            </ol>
        </div>
    );
};

export default ProductSizes