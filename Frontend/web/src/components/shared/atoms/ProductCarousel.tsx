import React, { useState } from "react";
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

interface ProductCarouselProps {
    images: Array<{
        original: string;
    }>;
}

const ProductCarousel : React.FC<ProductCarouselProps> = ({ images }) => {
    const [showNav, setShowNav] = useState(false);

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