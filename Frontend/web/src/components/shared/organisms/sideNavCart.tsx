import React from "react";
import SideNavTitle from "../molecules/sideNavTitle";
import SideNavItems from "../molecules/sideNavItems";
import SideNavFooter from "../molecules/sideNavFooter";

const SideNavCart : React.FC = () => {
    return (
        <div className="container w-full h-full">
            <SideNavTitle/>
            <SideNavItems/>
            <SideNavFooter/>
        </div>
    );
};

export default SideNavCart