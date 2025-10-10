import React from "react";
import PromisesBanner from "../../shared/organisms/promisesBanner";
import WebDescription from "../../shared/atoms/webDescription";
import NewslatterBanner from "../../shared/organisms/newsletterBanner";
import MoreBottomInfo from "../../shared/organisms/moreBottomInfo";

const Footer : React.FC = () => {
    return(
        <footer>
            <WebDescription/>
            <PromisesBanner/>
            <NewslatterBanner/>
            <MoreBottomInfo/>
        </footer>
        
    );
};

export default Footer