import { ProductPayload } from 'store/entities/model';

const timeoutDecorator = (fn) => async (...args) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn(...args));
    }, 2000);
  });
};

export const getAllCartItems = timeoutDecorator(function () {
  return localStorage.getItem('cart');
});

export const postItemToCart = timeoutDecorator(function (item: ProductPayload) {
  const cartItems = JSON.parse(localStorage.getItem('cart') as string);

  localStorage.removeItem('cart');
  cartItems.push(item);
  localStorage.setItem('cart', JSON.stringify(cartItems));

  return localStorage.getItem('cart');
});

export const deleteItemFromCart = timeoutDecorator(function (itemId: string) {
  const items = JSON.parse(localStorage.getItem('cart') as string);
  const targetIdx = items.map((item) => item.id).indexOf(itemId);
  const filteredItems = items.filter((item, idx) => idx !== targetIdx);

  localStorage.removeItem('cart');
  localStorage.setItem('cart', JSON.stringify(filteredItems));

  return localStorage.getItem('cart');
});

export const postOrder = timeoutDecorator(function (order) {
  console.log(order);
});
