import React from 'react';

const ImageBar: React.FC<{ image: string }> = (props) => {

    return (
        <img 
            src={props.image} 
            alt="ImageBar" 
            className="w-full h-auto"
            onError={(e) => {
                console.error('Error loading image:', props.image);
                e.currentTarget.style.display = 'none';
            }}
        />
    );
};

export default ImageBar;