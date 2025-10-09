import React from "react";

const ProductDescription : React.FC = () => {
    return (
        <div className="flex flex-col text-black">
            <span className="font-bold font-sx text-gray-500">Brand</span>
            <h3 className="font-lg font-medium mt-4">Title</h3>
            <div className="flex flex-row gap-2 font-bold">
                <span className="line-through text-gray-400">$84.990</span>
                <span>$59.493</span>
            </div>
        </div>  

    );
};

export default ProductDescription