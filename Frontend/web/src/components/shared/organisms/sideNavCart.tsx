import React from "react";
import SideNavTitle from "../molecules/sideNavTitle";
import SideNavItems from "../molecules/sideNavItems";

const SideNavCart : React.FC = () => {
    return (
        <div className="container w-full h-full">
            <SideNavTitle/>
            <SideNavItems/>
        </div>
    );
};

export default SideNavCart