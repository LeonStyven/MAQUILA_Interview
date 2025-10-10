import React from "react";
import PromisesBanner from "../../shared/organisms/promisesBanner";
import WebDescription from "../../shared/atoms/webDescription";
import NewslatterBanner from "../../shared/organisms/newsletterBanner";

const Footer : React.FC = () => {
    return(
        <footer>
            <WebDescription/>
            <PromisesBanner/>
            <NewslatterBanner/>
            <NewslatterBanner/>
        </footer>
        
    );
};

export default Footer