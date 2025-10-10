import React from "react";
import ProductCard from "../molecules/productCard";

const ProductsSlider : React.FC = () => {
    return (
        <div className="flex flex-row gap-2 my-8 justify-center">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        
    );
};

export default ProductsSlider