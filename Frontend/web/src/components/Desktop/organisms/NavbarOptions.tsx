import React from 'react';
import searchIcon from  '../../../assets/nav/search.svg'
import pinIcon from  '../../../assets/nav/pin.svg'
import favoriteIcon from  '../../../assets/nav/favorite.svg'
import userIcon from  '../../../assets/nav/user.svg'
import shoppingBagIcon from  '../../../assets/nav/shopping-bag.svg'

const NavbarOptions: React.FC =() => {
    return (
        <div className="flex flex-row gap-1 font-bold w-full justify-center">
            <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
                <img src={searchIcon} alt="" />
            </button>
            <button className= 'p-2 cursor-pointer hover:bg-red-700 rounded-md'>
                <img src={pinIcon} alt="" />
            </button>
            <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
                <img src={favoriteIcon} alt="" />
            </button>
            <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
                <img src={userIcon} alt="" />
            </button>
            <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
                <img src={shoppingBagIcon} alt="" />
            </button>
        </div>
    );
};

export default NavbarOptions