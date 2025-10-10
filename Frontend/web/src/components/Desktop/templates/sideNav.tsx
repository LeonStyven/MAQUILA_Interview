import React, { useState } from "react";
import SideNavCart from "../../shared/organisms/sideNavCart";

const SideNav : React.FC = () => {

    return (
        <aside style={{
                width: '25%',
                background: 'white',
                position: 'fixed',
                height: '100vh',
                transition: 'all 1s',
            }} className="aside-shopping-cart active shadow-lg fixed top-0 right-0 z-10 p-2">
            <SideNavCart/>
        </aside>
    );
};

export default SideNav