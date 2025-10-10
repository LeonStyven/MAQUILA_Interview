import React from "react";
import SideNavCart from "../../shared/organisms/sideNavCart";

const SideNav : React.FC = () => {
    return (
        <div style={{
                width: '25%',
                background: 'white',
                position: 'fixed',
                height: '100vh',
                transition: 'all 1s',
            }} className="shadow-lg fixed top-0 right-0 z-10 p-2">
            <SideNavCart/>
        </div>
    );
};

export default SideNav