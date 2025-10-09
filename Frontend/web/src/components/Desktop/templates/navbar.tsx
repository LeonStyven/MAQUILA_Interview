import React from 'react';
import ImageBar from '../../shared/molecules/imageBar';
import topbarImage from '../../../assets/banners/topbar-grinch-desktop.webp';

const Navbar: React.FC = () => {

    const imageBar = topbarImage;


    return (
        <nav className="shadow-lg fixed">

            <ImageBar image={imageBar} />

            <div className="max-w-7xl mx-0 px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-gray-800">Mi Tienda</h1>
                    </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">Inicio</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Productos</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Contacto</a>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
