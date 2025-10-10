import React from "react";

interface ProductSizes {
    sizes: Array<{
        size: string;
    }>;
}

const ProductSizes : React.FC<ProductSizes> = ({ sizes }) => {
    return (
        <div className="">
            <ol className="flex flex-row justify-center gap-2 px-1 py-1 mx-2 my-2 bg-white text-black text-xs">
                {
                    sizes.map((size, index) => {
                        return (
                            <li key={index} className="border border-solid border-black p-1 h-6 w-6 text-center cursor-pointer hover:bg-black hover:text-white"><button>{size.size}</button></li>
                        )
                    })
                }
            </ol>
        </div>
    );
};

export default ProductSizes