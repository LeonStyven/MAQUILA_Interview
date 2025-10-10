import React, { useState } from "react";
import ProductCard from "../molecules/productCard";
import productsData from "../../../assets/object/search.json";

const ProductsSlider : React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const initialProducts = productsData.slice(0, 4);
    const remainingProducts = productsData.slice(4);
    const displayedProducts = showAll ? productsData : initialProducts;

    return (
        <div className="py-8 px-40">
            <div className="grid grid-cols-4 gap-2 justify-center">
                {displayedProducts.map((product, index) => {
                    const images = product.items?.[0]?.images?.map(img => ({
                        original: img.imageUrl
                    })) || [];

                    const description = {
                        brand: product.brand,
                        title: product.productName,
                        originalPrice: product.price,
                        discountedPrice: Math.round(product.price * 0.7),
                    }

                    const sizes = product.skuSpecifications?.[0]?.values?.map(size => ({
                        size: size.name
                    })) || [];

                    return (
                        <ProductCard 
                            key={index} 
                            images={images}
                            description={description}
                            sizes={sizes}
                        />
                    );
                })}
            </div>
            
            {remainingProducts.length > 0 && (
                <div className="flex justify-center mt-4">
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                    >
                        {showAll ? 'Ver menos' : `Ver más (${remainingProducts.length})`}
                    </button>
                </div>
            )}
        </div>
        
    );
};

export default ProductsSlider