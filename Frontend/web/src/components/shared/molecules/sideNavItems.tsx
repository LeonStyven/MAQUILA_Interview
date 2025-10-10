import React from "react";
import { useCart } from "../../Desktop/context/cartContext";
import ProductCountStepper from "../atoms/productCountStepper";

function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
}

const SideNavItems: React.FC = () => {
  const { items, updateQty, remove } = useCart();

  if (items.length === 0) {
    return <div className="mt-8 ml-4 text-sm text-gray-500">Tu carrito está vacío.</div>;
  }

  return (
    <div className="flex flex-col mt-8 h-fit w-full ml-4 pr-4">
      {items.map((item) => (
        <div key={`${item.productId}-${item.sizeId ?? "default"}`} className="flex mb-4 border-b border-gray-300 pb-4">
          <img className="w-1/3 object-cover p-4" src={item.image} alt={item.name} />
          <div className="product-description ml-4 w-2/3 pr-2 pt-4">
            <div className="flex w-full justify-between">
              <span className="text-gray-400 font-light text-base">
                {item.sizeId ? `Talla: ${item.sizeId}` : "\u00A0"}
              </span>
              {/* eliminar */}
              <button
                aria-label="Eliminar del carrito"
                onClick={() => remove(item.productId, item.sizeId)}
                className="p-1 rounded hover:bg-gray-100"
                title="Eliminar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="#99a1af">
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280Z"/>
                </svg>
              </button>
            </div>

            <div className="flex font-medium pr-2">
              <p className="truncate" title={item.name}>{item.name}</p>
            </div>

            <div className="flex pr-2 items-center mt-4 gap-3">
              <div className="min-w-[120px]">
                <ProductCountStepper
                  minValue={1}
                  maxValue={item.stock}
                  value={item.qty}
                  onChange={(val) => updateQty(item.productId, val, item.sizeId)}
                />
              </div>

              <div className="flex flex-col">
                <span className="text-base font-bold">{formatCOP(item.price)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavItems;
