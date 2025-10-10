import React from "react";
import SideNavTitle from "../molecules/sideNavTitle";
import SideNavItem from "../molecules/sideNavItem";

const SideNavCart : React.FC = () => {
    return (
        <div className="container w-full h-full">
            <SideNavTitle/>
            <SideNavItem/>
        </div>
    );
};

export default SideNavCart