export type Prodact = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  weight: number;
};
export interface ProdactData {
  [x: string]: Prodact;
}
export enum Status {
  LOADING = "loading",
  SUCCESS = "complleted",
  ERROR = "error",
}
export interface ProdactState {
  items: Prodact[];
  status: Status;
}
