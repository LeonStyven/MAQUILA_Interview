import React, { useState, useEffect } from "react";
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

//Imagenes para el slider
import bannerChilloutDesktop from '../../../assets/banners/banner-ppal-chillout-desktop.webp';
import bannerChilloutMobile from '../../../assets/banners/banner-ppal-chillout-mobile.webp';
import bannerGrinchDesktop from '../../../assets/banners/banner-ppal-grinch-desktop.webp';
import bannerGrinchMobile from '../../../assets/banners/banner-ppal-grinch-mobile.webp';
import bannerHarryDesktop from '../../../assets/banners/banner-ppal-harry-desktop.webp';
import bannerHarryMobile from '../../../assets/banners/banner-ppal-harry-mobile.webp';

const ImageSlider: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        // Verificar tamaño inicial
        checkScreenSize();

        // Escuchar cambios de tamaño
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Crear array de imágenes condicionalmente
    const images = isMobile ? [
        {
            original: bannerChilloutMobile,
        },
        {
            original: bannerGrinchMobile,
        },
        {
            original: bannerHarryMobile,
        },
    ] : [
        {
            original: bannerChilloutDesktop,
        },
        {
            original: bannerGrinchDesktop,
        },
        {
            original: bannerHarryDesktop,
        },
    ];

    return(
        <div className="m-0 p-0">
            <ImageGallery  
                items={images} 
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                showBullets={true}
                autoPlay={true}
                slideDuration={550}
                slideInterval={4000}
            />
        </div>
        
    );
};

export default ImageSlider