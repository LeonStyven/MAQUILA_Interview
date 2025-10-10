import React from "react";
import ContactList from "../atoms/contactList";
import HelpList from "../atoms/helpList";
import AboutList from "../atoms/aboutList";
import PaymenList from "../atoms/paymentList";

const ContactSection : React.FC = () => {
    return (
        <div className="flex w-full justify-around">
            <div className="flex my-20 gap-20">
                <ContactList/>
                <HelpList/>
                <AboutList/>
                <PaymenList/>
            </div>
            
        </div>
    );
};

export default ContactSection