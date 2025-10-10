import React from "react";

const ProductSizes : React.FC = () => {
    return (
        <div className="">
            <ol className="flex flex-row justify-center gap-2 px-1 py-1 mx-2 my-2 bg-white text-black text-xs">
                <li className="bg-black text-white p-1 h-6 w-6 text-center cursor-pointer hover:bg-black hover:text-white"><button>XS</button></li>
                <li className="border border-solid border-black p-1 h-6 w-6 text-center cursor-pointer hover:bg-black hover:text-white"><button>S</button></li>
                <li className="border border-solid border-black p-1 h-6 w-6 text-center cursor-pointer hover:bg-black hover:text-white"><button>M</button></li>
                <li className="border border-solid border-black p-1 h-6 w-6 text-center cursor-pointer hover:bg-black hover:text-white"><button>L</button></li>
                <li className="border border-solid border-black p-1 h-6 w-6 text-center cursor-pointer hover:bg-black hover:text-white"><button>Xl</button></li>
            </ol>
        </div>
    );
};

export default ProductSizes