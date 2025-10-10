import React, { useEffect, useRef } from "react";
import Navbar from "../organisms/navbar";
import ImageSlider from "../../shared/organisms/imageSlider";
import ImageBar from "../../shared/molecules/imageBar";
import ImageBarImage from '../../../assets/banners/topbar-sharestory-desktop.webp';
import ProductsSlider from "../../shared/organisms/productsSlider";
import WebDescription from "../../shared/atoms/webDescription";
import PromisesBanner from "../../shared/organisms/promisesBanner";



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
            <ProductsSlider/>
            <WebDescription/>
            <PromisesBanner/>
        </>
    );
};

export default DesktopTemplate