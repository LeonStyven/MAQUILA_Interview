import React from "react";
import ContactSection from "../molecules/contactSection";
import SocialContacts from "../molecules/socialContact";
import BottomLinks from "../molecules/bottomLinks";
import BottomRights from "../molecules/bottomRights";

const MoreBottomInfo : React.FC = () => {
    return (
        <>
            <ContactSection/>
            <SocialContacts/>
            <BottomLinks/>
            <BottomRights/>
        </>
    );
};

export default MoreBottomInfo