import React from 'react';
import ImageBar from '../../shared/molecules/imageBar';
import topbarImage from '../../../assets/banners/topbar-grinch-desktop.webp';
import ExtendedMoviesLogo from '../../shared/atoms/ExtendedMoviesLogo';
import NavbarLinks from '../organisms/NavbarLinks';
import NavbarOptions from '../organisms/NavbarOptions';

const Navbar: React.FC = () => {

    const imageBar = topbarImage;


    return (
        <nav className="shadow-lg fixed mx-0">

            <ImageBar image={imageBar} />

            <div className="mx-0 px-4 w-full">
                <div className="flex justify-between items-center px-10 w-full">
                    <div className="flex items-center">
                        <ExtendedMoviesLogo/>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NavbarLinks/>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NavbarOptions/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
