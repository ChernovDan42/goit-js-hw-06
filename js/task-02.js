const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector('#ingredients');


const makeItemElement = array => {
  return array.map(ingredien => {
    const ingridientEl = document.createElement('li');
    ingridientEl.name = ingredien;
    ingridientEl.textContent = ingredien;
    ingridientEl.classList.add('item');

    return ingridientEl;
    })
}


const elements = makeItemElement(ingredients);

listRef.append(...elements);  
