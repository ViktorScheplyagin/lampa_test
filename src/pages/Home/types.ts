import { ProductPayload } from "store/entities/model";

export type HomeProps = {
  products: ProductPayload[];
  isProductsFetching: boolean;
  isProductAddingToCart: boolean;
  addToCart: (product: ProductPayload) => void;
};

export type HomeContainerProps = HomeProps & {
  cartItemsLength: number;
  fetchProducts: () => void;
  fetchCartItems: () => void;
};