import { ProductPayload } from 'store/entities/model';

const productsDB: ProductPayload[] = [
  {
    id: '1',
    name: 'Lorem',
    previewURL: 'https://fakeimg.pl/300x250',
    description: 'Laborum ea nisi deserunt non sunt dolor magna qui sunt dolore.',
    price: 12,
  },
  {
    id: '2',
    name: 'Laborum',
    previewURL: 'https://fakeimg.pl/300x250',
    description: 'Dolore ea magna fugiat reprehenderit et duis fugiat.',
    price: 45,
  },
  {
    id: '3',
    name: 'Nisi',
    previewURL: 'https://fakeimg.pl/300x250',
    description: 'Dolore quis laborum nulla ad excepteur id sit labore.',
    price: 32,
  },
  {
    id: '4',
    name: 'Dolore',
    previewURL: 'https://fakeimg.pl/300x250',
    description: 'Pariatur ea pariatur enim fugiat pariatur cupidatat.',
    price: 50,
  },
  {
    id: '5',
    name: 'Pariatur',
    previewURL: 'https://fakeimg.pl/300x250',
    description:
      'Nulla nulla laborum occaecat velit enim reprehenderit voluptate in excepteur velit amet cillum nisi.',
    price: 100,
  },
  {
    id: '6',
    name: 'Nulla',
    previewURL: 'https://fakeimg.pl/300x250',
    description: 'Cupidatat duis in proident irure sit aute consequat esse sunt consequat do.',
    price: 99,
  },
  {
    id: '7',
    name: 'Cupidatat',
    previewURL: 'https://fakeimg.pl/300x250',
    description: 'Laborum magna non voluptate non aliquip.',
    price: 23,
  },
  {
    id: '8',
    name: 'Tempor',
    previewURL: 'https://fakeimg.pl/300x250',
    description:
      'Lorem enim duis in excepteur laborum sint fugiat esse fugiat cupidatat laborum nulla.',
    price: 87,
  },
  {
    id: '9',
    name: 'Occaecat',
    previewURL: 'https://fakeimg.pl/300x250',
    description: 'Tempor nulla enim eu ad commodo sit qui tempor.',
    price: 29,
  },
  {
    id: '10',
    name: 'Excepteur',
    previewURL: 'https://fakeimg.pl/300x250',
    description:
      'Occaecat excepteur consequat aute sit mollit ipsum incididunt irure veniam aliquip sint.',
    price: 39,
  },
];

export default JSON.stringify(productsDB);
