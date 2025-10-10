import React from "react";
import SideNavTitle from "../molecules/sideNavTitle";
import SideNavItems from "../molecules/sideNavItems";
import SideNavFooter from "../molecules/sideNavFooter";

type Props = { onClose?: () => void };

const SideNavCart : React.FC<Props> = ( {onClose } ) => {
    return (
        <div className="container w-full h-full flex flex-col">
            <SideNavTitle onClose={onClose} />
            <div className="flex-1 overflow-y-auto">
                <SideNavItems />
            </div>
            <SideNavFooter />
        </div>
      );
};

export default SideNavCart