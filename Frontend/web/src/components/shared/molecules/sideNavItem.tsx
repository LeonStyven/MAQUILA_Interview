import React from "react";
import ProductCountStepper from "../atoms/productCountStepper";

const SideNavItem : React.FC = () => {
    return (
        <ProductCountStepper minValue={1} maxValue={5}/>
    );
};

export default SideNavItem