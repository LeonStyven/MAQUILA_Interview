import React from "react";

const WebDescription: React.FC = () => {
    return (
        <div style={{borderTop: "solid 1px #d0d0d0"}} className="text-black mt-4 py-20 flex justify-center">
            <div className="container w-1/2">
                <h2 className="text-2xl font-bold">TIENDA DE ROPA ONLINE PARA HOMBRE Y MUJER</h2>
                <p className="mb-10">Sabemos que lo tuyo no es precisamente lo convencional! Y en Movies tenemos todo el estilo y los diseños que siempre quisiste encontrar. En nuestra <b>tienda de ropa online</b> hay un espacio para todos. No importa cuales sean tus preferencias, si eres más de series clásicas o de las más actuales, si te mueres por el universo Marvel o en definitiva llevas contigo DC comics hasta el final. Recuerda! Movies es más que una <b>tienda de ropa de superhéroes</b>, series o películas; nosotros somos quienes junto a ti, hacemos que la historia continúe, dándole la posibilidad de llevar siempre contigo las colecciones oficiales, las cápsulas originales y las prendas más icónicas del mercado; hombre o mujer? Whatever!, aquí también hay una sección pensada desde todos los gustos.</p>

                <span className="underline "><a href="#">Ver más</a></span>
            </div>
        </div>
    );
};

export default WebDescription