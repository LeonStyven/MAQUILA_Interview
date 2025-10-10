import React, { useEffect, useRef } from "react";
import { SideNavProvider } from "../context/sideNavContext";
import { CartProvider } from "../context/cartContext"; // 👈 nuevo
import Navbar from "../organisms/navbar";
import ImageSlider from "../../shared/organisms/imageSlider";
import ImageBar from "../../shared/molecules/imageBar";
import ImageBarImage from '../../../assets/banners/topbar-sharestory-desktop.webp';
import ProductsSlider from "../../shared/organisms/productsSlider";
import Footer from "../organisms/footer";
import SideNav from "../templates/sideNav";

const HomePage : React.FC = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateContentPosition = () => {
      if (navbarRef.current && contentRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        contentRef.current.style.paddingTop = `${navbarHeight}px`;
      }
    };
    updateContentPosition();
    window.addEventListener('resize', updateContentPosition);
    return () => window.removeEventListener('resize', updateContentPosition);
  }, []);

  return (
    <CartProvider>
      <SideNavProvider>
        <Navbar ref={navbarRef}/>
        <SideNav/>
        <div ref={contentRef} className="w-full">
          <ImageSlider/>
        </div>
        <ImageBar image={ImageBarImage}/>
        <ProductsSlider/>
        <Footer/>
      </SideNavProvider>
    </CartProvider>
  );
};

export default HomePage;
