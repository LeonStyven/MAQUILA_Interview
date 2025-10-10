import React, { useState } from "react";
import ProductCarousel from "../atoms/ProductCarousel";
import ProductDescription from "../atoms/productDescription";
import NewItemBadget from "../atoms/NewItemBadget";
import ProductSizes from "../atoms/ProductSizes";
import PromotionBadget from "../atoms/PromotionBadget";
import ShopButton from "../atoms/ShopButton";


interface ProductCardProps {
    images: Array<{
        original: string;
    }>,
    description: {
        brand: string;
        title: string;
        originalPrice: number;
        discountedPrice: number
    },
    sizes: Array<{
        size: string;
    }>;
}

const ProductCard : React.FC<ProductCardProps> = ({images, description, sizes}) => {

    const [showOptions, setShowoptions] = useState(false);

    return(
        <div 
            className="container w-80 flex flex-col cursor-pointer gap-2"
            onMouseEnter={() => setShowoptions(true)}
            onMouseLeave={() => setShowoptions(false)}
        
        >
            <div className="flex relative">
                <ProductCarousel images={images}/>
                <div className="absolute top-2 left-2"><PromotionBadget amount={30}/></div>
                
                <div className={`absolute left-2 ${showOptions ? 'bottom-12' : 'bottom-2' }`}><NewItemBadget/></div>
                {showOptions && <div className="absolute bottom-0 w-full box-border"><ProductSizes sizes={sizes}/></div>}
            </div>
            <ProductDescription {...description}/>
            <div className={`transition-opacity duration-300 ${showOptions ? 'opacity-100' : 'opacity-0'}`}>
                <ShopButton/>
            </div>
        </div>
        
    );
};

export default ProductCard