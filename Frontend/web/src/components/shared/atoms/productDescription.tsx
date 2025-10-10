import React from "react";

const ProductDescription : React.FC = () => {
    return (
        <div className="flex flex-col text-black gap-1">
            <span className="font-bold font-sx text-gray-500">ONE PIECE</span>
            <h3 className="font-lg font-medium mt-2 truncate">Camiseta de One Piece manga corta marfil para hombre</h3>
            <div className="flex flex-row gap-2">
                <span className="line-through text-gray-400">$84.990</span>
                <span className="font-semibold ">$59.493</span>
            </div>
        </div>  

    );
};

export default ProductDescription