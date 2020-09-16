export interface ProductPayload {
  id: string;
  previewURL: string;
  name: string;
  description: string;
  price: number;
}

export interface ClientData {
  name: string;
  surname: string;
  address: string;
  phone: string;
}

export interface OrderPayload {
  clientData: ClientData;
  content: {
    item: ProductPayload;
    quantity: number;
  };
}
