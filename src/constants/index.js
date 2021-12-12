const INPUT_TYPE = Object.freeze({
  longTitle: 'longTitle',
  shortTitle: 'shortTitle',
  description: 'description',
  imageUrl: 'imageUrl',
  dropdown: 'dropdown',
  linkOutUrl: 'linkOutUrl',
});

const SHEET_DATA = [
  {
    id: '54',
    name: 'Apple',
    image: 'https://picsum.photos/id/54/80/80',
    likes: 170,
  },
  {
    id: '1',
    name: 'Watermelon',
    image: 'https://picsum.photos/id/1/80/80',
    likes: 170,
  },
  {
    id: '2',
    name: 'Orange',
    image: 'https://picsum.photos/id/2/80/80',
    likes: 270,
  },
  {
    id: '85',
    name: 'Pear',
    image: 'https://picsum.photos/id/85/80/80',
    likes: 70,
  },
  {
    id: '10',
    name: "<img onerror='window.document.body.innerHTML = \"<h1>XSS</h1>\";' src=''> ",
    image: 'https://picsum.photos/id/10/80/80',
    likes: 170,
  },
  {
    id: '3333',
    name: 'Cherry',
    image: 'https://picsum.photos/id/33/80/80',
    likes: 150,
  },
  {
    id: '3',
    name: 'Strawberry',
    image: 'https://picsum.photos/id/3/80/80',
    likes: 130,
  },
  {
    id: '666',
    name: 'Nectarine',
    image: 'https://picsum.photos/id/66/80/80',
    likes: 160,
  },
  {
    id: '9',
    name: 'Grape',
    image: 'https://picsum.photos/id/9/80/80',
    likes: 170,
  },
  {
    id: '222',
    name: 'Mango',
    image: 'https://picsum.photos/id/22/80/80',
    likes: 170,
  },
];

const TAG_MAP = Object.freeze({
  all: 'All',
  baby: 'Baby',
  toy: 'Toy',
  music: 'Music',
  furniture: 'Furniture',
  camping: 'Camping',
});

const GRID_DATA_BASE = [
  {
    title: 'Diapers Size 1 (8-14 lbs) Newborn, 198 Count - Pampers Swaddlers Disposable Baby Diapers, ONE MONTH SUPPLY (Packaging May Vary)',
    originalPrice: 100,
    priceAfterDiscount: 50,
    imgUr: 'https://m.media-amazon.com/images/I/71+uRDCboVL._AC_SX679_.jpg',
    tag: TAG_MAP.baby,
  },
  {
    title: 'Baby Diapers Size 4, 140 Ct, Huggies Little Movers',
    originalPrice: 50,
    priceAfterDiscount: 25,
    imgUr: 'https://m.media-amazon.com/images/I/817UOZnSGyL._AC_SX679_PIbundle-140,TopRight,0,0_SH20_.jpg',
    tag: TAG_MAP.baby,
  },
  {
    title: 'LEGO Star Wars B-Wing Starfighter (10227)',
    originalPrice: 600,
    priceAfterDiscount: 300,
    imgUr: 'https://m.media-amazon.com/images/I/91LMvDDYCUL._AC_SL1500_.jpg',
    tag: TAG_MAP.toy,
  },
  {
    title: "AC/DC: Maximum Rock & Roll: The Ultimate Story of the World's Greatest Rock-and-Roll Band",
    originalPrice: 30,
    priceAfterDiscount: 15,
    imgUr: 'https://images-na.ssl-images-amazon.com/images/I/41x3hlihYYL._SX318_BO1,204,203,200_.jpg',
    tag: TAG_MAP.music,
  },
  {
    title: 'Mozaic Queen Size 10-inch Cotton Twill Futon Mattress, Black',
    originalPrice: 280,
    priceAfterDiscount: 140,
    imgUr: 'https://m.media-amazon.com/images/I/81aFeNSl7eL._AC_SX679_.jpg',
    tag: TAG_MAP.furniture,
  },
  {
    title: 'MOON LENCE Camping Tent 2/4/6 Person Family Tent Double Layer Outdoor Tent Waterproof Windproof Anti-UV',
    originalPrice: 50,
    priceAfterDiscount: 25,
    imgUr: 'https://m.media-amazon.com/images/I/61nPipPXGbL._AC_SX679_.jpg',
    tag: TAG_MAP.camping,
  },
];

const GRID_DATA = (() => {
  const result = new Array(150);
  for (let i = 0; i < result.length; i += 1) {
    const index = Math.floor(Math.random() * GRID_DATA_BASE.length);
    result[i] = { ...GRID_DATA_BASE[index], id: i };
  }
  return result;
})();

export { INPUT_TYPE, SHEET_DATA, GRID_DATA, TAG_MAP };
