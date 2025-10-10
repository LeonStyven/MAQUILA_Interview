import React from 'react';
import { useSideNav } from '../context/sideNavContext';
import { useCart } from '../context/cartContext'; // 👈 nuevo
import searchIcon from  '../../../assets/nav/search.svg';
import pinIcon from  '../../../assets/nav/pin.svg';
import favoriteIcon from  '../../../assets/nav/favorite.svg';
import userIcon from  '../../../assets/nav/user.svg';
import shoppingBagIcon from  '../../../assets/nav/shopping-bag.svg';

const NavbarOptions: React.FC = () => {
  const { isOpen, toggle } = useSideNav();
  const { count } = useCart(); // 👈 cantidad total

  return (
    <div className="flex flex-row gap-1 font-bold w-full justify-center">
      <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
        <img src={searchIcon} alt="Buscar" />
      </button>
      <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
        <img src={pinIcon} alt="Ubicación" />
      </button>
      <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
        <img src={favoriteIcon} alt="Favoritos" />
      </button>
      <button className='p-2 cursor-pointer hover:bg-red-700 rounded-md'>
        <img src={userIcon} alt="Usuario" />
      </button>

      {/* Carrito */}
      <button
        className={`relative p-2 cursor-pointer rounded-md transition-colors ${isOpen ? 'bg-red-800' : 'hover:bg-red-700'}`}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="desktop-sidenav"
      >
        <img src={shoppingBagIcon} alt="Carrito de compras" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] px-1 min-w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
    </div>
  );
};

export default NavbarOptions;
