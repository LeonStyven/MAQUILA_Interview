import React, { useState } from "react";
import SideNavCart from "../../shared/organisms/sideNavCart";
import { useSideNav } from "../context/sideNavContext";


const SideNav : React.FC = () => {

    const { isOpen, close } = useSideNav();

    return (
        <aside
            id="desktop-sidenav"
            aria-hidden={!isOpen}
            className={`
                fixed 
                top-0 
                right-0 
                z-50 
                h-screen 
                shadow-lg 
                bg-white 
                p-2 
                w-full 
                sm:w-[400] 
                lg:w-[25%] 
                transform 
                transition-transform 
                duration-300 
                ease-out 
                ${isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}
                `}
            >
                <SideNavCart onClose={close} />
        </aside>
    );
};

export default SideNav