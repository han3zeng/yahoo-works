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

export { INPUT_TYPE, SHEET_DATA };
