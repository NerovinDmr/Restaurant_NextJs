export type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  count: number;
  weight: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
