import React from "react";

const ProductDescription : React.FC = () => {
    return (
        <div className="flex flex-col">
            <span className="font-bold font-sx text-slate-500">Brand</span>
            <h3 className="font-regular font-medium">Title</h3>
            <div className="flex flex-row">
                <span className="line-through">$84.990</span>
                <span>$59.493</span>
            </div>
        </div>

    );
};

export default ProductDescription