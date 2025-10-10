import { forwardRef, useState } from 'react';
import ImageBar from '../../shared/molecules/imageBar';
import topbarImage from '../../../assets/banners/topbar-grinch-desktop.webp';
import ExtendedMoviesLogo from '../../shared/atoms/ExtendedMoviesLogo';
import NavbarLinks from '../molecules/NavbarLinks';
import NavbarOptions from '../molecules/NavbarOptions';

const Navbar = forwardRef<HTMLElement>((props, ref) => {

    const [showAsideNav, setShowAsideNav] = useState (false)


    const toggleAside = () => setShowAsideNav(prev => !prev);


    return (
        <nav ref={ref} className="shadow-lg fixed top-0 left-0 right-0 z-5 bg-white">

            <ImageBar image={topbarImage} />

            <div className="mx-0 px-4 w-full">
                <div className="flex justify-between items-center px-10 w-full">
                    <div className="flex items-center">
                        <ExtendedMoviesLogo/>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NavbarLinks/>
                    </div>
                    <div className="flex items-center space-x-4">
                        <NavbarOptions
                            showAside={showAsideNav}
                            onToggleAside={toggleAside}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
});

export default Navbar;
