import React, { useState } from "react";
import { useCart } from "../../Desktop/context/cartContext";

function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
}

const SideNavFooter: React.FC = () => {
  const { subtotal, count, checkout, clear } = useCart();
  const [doc, setDoc] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onCheckout() {
    setLoading(true);
    setMsg(null);
    const res = await checkout({ customerDocument: doc.trim() });
    setLoading(false);
    if (res.ok) {
      setMsg(`¡Pedido creado! ID: ${res.orderId}`);
      clear();
    } else {
      setMsg(`Error: ${res.error ?? "No se pudo crear el pedido"}`);
    }
  }

  return (
    <div className="mt-auto border-t border-gray-200 p-4 space-y-3">
      <div className="flex justify-between text-sm">
        <span>Items</span>
        <span>{count}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>{formatCOP(subtotal)}</span>
      </div>

      <div className="flex gap-2">
        <input
          className="input input-bordered w-full p-2 border rounded"
          placeholder="Documento del cliente"
          value={doc}
          onChange={e => setDoc(e.target.value)}
        />
        <button
          className="btn bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={onCheckout}
          disabled={loading || count === 0 || !doc.trim()}
        >
          {loading ? "Procesando..." : "Checkout"}
        </button>
      </div>

      {msg && <p className="text-sm">{msg}</p>}
    </div>
  );
};

export default SideNavFooter;
