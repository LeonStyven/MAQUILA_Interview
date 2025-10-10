import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
  } from "react";
  
  /** Shape de cada ítem del carrito */
  export type CartItem = {
    productId: string;
    name: string;
    image: string;
    price: number;   // precio unitario (usa el descontado si aplica)
    stock: number;   // límite superior para qty
    sizeId?: string; // talla/sku (opcional)
    qty: number;     // cantidad en carrito
  };
  
  type CartState = {
    items: CartItem[];
    loaded: boolean; // para no persistir antes de hidratar
  };
  
  type Action =
    | { type: "HYDRATE"; payload: CartItem[] }
    | { type: "ADD"; payload: Omit<CartItem, "qty"> & { qty?: number } }
    | { type: "UPDATE_QTY"; payload: { productId: string; sizeId?: string; qty: number } }
    | { type: "REMOVE"; payload: { productId: string; sizeId?: string } }
    | { type: "CLEAR" };
  
  const STORAGE_KEY = "cart_v1";
  
  /** clave compuesta por productId + sizeId para diferenciar tallas */
  function keyOf(p: { productId: string; sizeId?: string }) {
    return `${p.productId}::${p.sizeId ?? "default"}`;
  }
  
  function cartReducer(state: CartState, action: Action): CartState {
    switch (action.type) {
      case "HYDRATE":
        return { items: action.payload, loaded: true };
  
      case "ADD": {
        const { productId, sizeId, qty = 1 } = action.payload;
        const map = new Map(state.items.map(i => [keyOf(i), i]));
        const k = keyOf({ productId, sizeId });
        const existing = map.get(k);
  
        if (existing) {
          const nextQty = Math.min(existing.stock, existing.qty + qty);
          map.set(k, { ...existing, qty: nextQty });
        } else {
          map.set(k, {
            ...action.payload,
            qty: Math.min(action.payload.stock, qty),
          });
        }
        return { ...state, items: Array.from(map.values()) };
      }
  
      case "UPDATE_QTY": {
        const { productId, sizeId, qty } = action.payload;
        return {
          ...state,
          items: state.items
            .map(i =>
              keyOf(i) === keyOf({ productId, sizeId })
                ? { ...i, qty: Math.max(1, Math.min(i.stock, qty)) }
                : i
            )
            .filter(i => i.qty > 0),
        };
      }
  
      case "REMOVE": {
        const { productId, sizeId } = action.payload;
        return {
          ...state,
          items: state.items.filter(i => keyOf(i) !== keyOf({ productId, sizeId })),
        };
      }
  
      case "CLEAR":
        return { ...state, items: [] };
  
      default:
        return state;
    }
  }
  
  type CartContextValue = {
    items: CartItem[];
    count: number;      // cantidad total (para badge)
    subtotal: number;   // suma qty * price
    add: (item: Omit<CartItem, "qty">, qty?: number) => void;
    updateQty: (productId: string, qty: number, sizeId?: string) => void;
    remove: (productId: string, sizeId?: string) => void;
    clear: () => void;
    /** POST al backend para crear la orden — lo cableamos más adelante */
    checkout: (payload: { customerDocument: string }) => Promise<{ ok: boolean; orderId?: string; error?: string }>;
  };
  
  const Ctx = createContext<CartContextValue | null>(null);
  
  export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [], loaded: false });
  
    // Hidratar desde localStorage al montar
    useEffect(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed: CartItem[] = raw ? JSON.parse(raw) : [];
        dispatch({ type: "HYDRATE", payload: parsed });
      } catch {
        dispatch({ type: "HYDRATE", payload: [] });
      }
    }, []);
  
    // Persistir en localStorage cuando cambie items y ya esté cargado
    useEffect(() => {
      if (!state.loaded) return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }, [state.items, state.loaded]);
  
    const add = useCallback((item: Omit<CartItem, "qty">, qty = 1) => {
      dispatch({ type: "ADD", payload: { ...item, qty } });
    }, []);
  
    const updateQty = useCallback((productId: string, qty: number, sizeId?: string) => {
      dispatch({ type: "UPDATE_QTY", payload: { productId, sizeId, qty } });
    }, []);
  
    const remove = useCallback((productId: string, sizeId?: string) => {
      dispatch({ type: "REMOVE", payload: { productId, sizeId } });
    }, []);
  
    const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  
    const count = useMemo(() => state.items.reduce((acc, i) => acc + i.qty, 0), [state.items]);
    const subtotal = useMemo(() => state.items.reduce((acc, i) => acc + i.qty * i.price, 0), [state.items]);
  
    const checkout: CartContextValue["checkout"] = useCallback(async ({ customerDocument }) => {
      // Lo dejaremos en “stub”; en un paso posterior cableamos el fetch real al backend
      return Promise.resolve({ ok: false, error: "Checkout API not implemented yet" });
    }, []);
  
    const value = useMemo(
      () => ({ items: state.items, count, subtotal, add, updateQty, remove, clear, checkout }),
      [state.items, count, subtotal, add, updateQty, remove, clear, checkout]
    );
  
    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
  };
  
  export function useCart() {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
  }
  