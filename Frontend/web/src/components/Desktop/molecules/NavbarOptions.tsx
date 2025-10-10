import React from 'react';
import searchIcon from  '../../../assets/nav/search.svg'
import pinIcon from  '../../../assets/nav/pin.svg'
import favoriteIcon from  '../../../assets/nav/favorite.svg'
import userIcon from  '../../../assets/nav/user.svg'
import shoppingBagIcon from  '../../../assets/nav/shopping-bag.svg'

type NavbarOptionsProps = {
    showAside: boolean;
    onToggleAside: () => void;
  };

const NavbarOptions: React.FC<NavbarOptionsProps> =({ showAside, onToggleAside }) => {

    type NavbarOptionsProps = {
        showAside: boolean;
        onToggleAside: () => void;
      };


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
            <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md' onClick={onToggleAside}>
                <img src={shoppingBagIcon} alt="Carrito de compras" />
            </button>
        </div>
    );
};

export default NavbarOptions