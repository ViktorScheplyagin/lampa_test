import { ProductPayload } from 'store/entities/model';
import { fetchNewProductsAC, toggleIsProductsFetchingAC } from './actions';

export const fetchProductsTC = () => async (dispatch) => {
  dispatch(toggleIsProductsFetchingAC(true));

  const productsJSON = await new Promise((resolve) => {
    setTimeout(() => {
      const responseJSON = localStorage.getItem('all');
      resolve(responseJSON);
    }, 2000);
  });
  const products: ProductPayload[] = JSON.parse(productsJSON as string);

  dispatch(toggleIsProductsFetchingAC(false));
  dispatch(fetchNewProductsAC(products));
};
