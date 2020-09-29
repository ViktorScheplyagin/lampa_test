import { OrderPayload, ProductPayload } from 'store/entities/model';

type ItemsQuantities = {
  [itemId: string]: {
    item: ProductPayload;
    quantity: number;
  };
};

export const getItemsQuantities = (
  items: ProductPayload[],
): ItemsQuantities => {
  const itemsQuantities: ItemsQuantities = {}; //TODO use Map here

  items.forEach((item) => {
    if (itemsQuantities[item.id] === undefined) {
      itemsQuantities[item.id] = {
        item,
        quantity: 1,
      };
    } else {
      itemsQuantities[item.id].quantity += 1;
    }
  });

  return itemsQuantities;
};

export const onOrderSubmitDecorator = (
  itemsAndQuantities: ItemsQuantities,
  submitCB: Function,
) => (clientData) => {
  const mapItemsAndQuantitiesToArray = () => {
    const itemsAndQuantitiesArr: any = [];

    for (let itemId in itemsAndQuantities) {
      itemsAndQuantitiesArr.push(itemsAndQuantities[itemId]);
    }

    return itemsAndQuantitiesArr;
  };

  const order: OrderPayload = {
    clientData,
    content: mapItemsAndQuantitiesToArray(),
  };

  submitCB(order);
};

export const calcTotalPrice = (items: ProductPayload[]) =>
  items?.reduce(
    (totalPrice: number, currentItem: ProductPayload) =>
      totalPrice + currentItem.price,
    0,
  );
