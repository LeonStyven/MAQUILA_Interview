import React, { useState } from "react";
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";


const ProductCarousel : React.FC = () => {
    const [showNav, setShowNav] = useState(false);

    const images = [
        {
            original: 'https://moviesshopco.vteximg.com.br/arquivos/ids/177739/238249-camiseta-hombre-one-piece-camiseta-iconica-1.jpg?v=638664382146500000'
        },
        {
            original: 'https://moviesshopco.vteximg.com.br/arquivos/ids/177740/238249-camiseta-hombre-one-piece-camiseta-iconica-2.jpg?v=638664382275230000'
        },
        {
            original: 'https://moviesshopco.vteximg.com.br/arquivos/ids/177741/238249-camiseta-hombre-one-piece-camiseta-iconica-3.jpg?v=638664382390130000'
        },
        {
            original: 'https://moviesshopco.vteximg.com.br/arquivos/ids/177742/238249-camiseta-hombre-one-piece-camiseta-iconica-4.jpg?v=638664382613130000'
        }
        
    ]

    return(
        <div 
            className="m-0 p-0 w-fit"
            onMouseEnter={() => setShowNav(true)}
            onMouseLeave={() => setShowNav(false)}
        >
            <ImageGallery  
                items={images} 
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                showBullets={false}
                autoPlay={false}
                slideDuration={550}
                slideInterval={4000}
                showNav={showNav}
            />
        </div>
        
    );
};

export default ProductCarousel