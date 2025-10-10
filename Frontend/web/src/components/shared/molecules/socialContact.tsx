import React from "react";
import facebookIcon from '../../../assets/social/icon-facebook.svg'
import instagramIcon from '../../../assets/social/icon-instagram.svg'
import tiktokIcon from '../../../assets/social/icon-tiktok.svg'
import youtubeIcon from '../../../assets/social/icon-youtube.svg'
import webIcon from '../../../assets/footer/icon-web.svg'

const SocialContacts : React.FC = () => {
    return (
        <div className="flex w-full px-40 justify-between text-black">
            <div className="social-container flex gap-4 items-center">
                <img src={facebookIcon} alt="icono Facebook" />
                <img src={instagramIcon} alt="icono Instagram" />
                <img src={tiktokIcon} alt="icono tiktok" />
                <img src={youtubeIcon} alt="icono Youtube" />
                <span className=" font-bold">SIGUENOS</span>
            </div>
            <div className="flex items-center">
                <img className="w-4" src={webIcon} alt="Icono web"/>
                <span className="text-sm ml-2">Colombia</span>
            </div>
            
        </div>
    );
};

export default SocialContacts