import React, { useEffect, useRef } from "react";
import Navbar from "../organisms/navbar";
import ImageSlider from "../../shared/organisms/imageSlider";
import ImageBar from "../../shared/molecules/imageBar";
import ImageBarImage from '../../../assets/banners/topbar-sharestory-desktop.webp';
import PromotionBadget from "../../shared/atoms/PromotionBadget";
import NewItemBadget from "../../shared/atoms/NewItemBadget";
import ProductCarousel from "../../shared/atoms/ProductCarousel";
import ProductDescription from "../../shared/atoms/productDescription";
import ProductSizes from "../../shared/atoms/ProductSizes";
import ShopButton from "../../shared/atoms/ShopButton";



const DesktopTemplate: React.FC = () => {
    const navbarRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const imageBar = ImageBarImage

    useEffect(() => {
        const updateContentPosition = () => {
            if (navbarRef.current && contentRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight;
                contentRef.current.style.paddingTop = `${navbarHeight}px`;
            }
        };

        // Actualizar posición inicial
        updateContentPosition();

        // Actualizar en resize
        window.addEventListener('resize', updateContentPosition);

        return () => {
            window.removeEventListener('resize', updateContentPosition);
        };
    }, []); 

    return (
        <>
            <Navbar ref={navbarRef}/>
            <div ref={contentRef} className="w-full">
                <ImageSlider/>
            </div>
            <ImageBar image={imageBar}/>
            <PromotionBadget amount={20}/>
            <NewItemBadget/>
            <ProductCarousel/>
            <ProductDescription/>
            <ProductSizes/>
            <ShopButton/>

        </>
    );
};

export default DesktopTemplate