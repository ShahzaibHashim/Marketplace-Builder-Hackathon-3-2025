import { create } from "zustand";

interface CartItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, { ...item, quantity: 1 }],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
