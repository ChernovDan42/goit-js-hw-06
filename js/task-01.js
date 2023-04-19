const categoriesRef = document.querySelector('#categories');
const categoryItemsRef = categories.querySelectorAll('.item')



function countCategories(category, items) {
    
console.log(`Number of categories: ${category.children.length}`)

    items.forEach(item => {
        
        const items = item.querySelectorAll('li')

        console.log(`Category: ${item.firstElementChild.textContent}`);
       console.log(`Elements: ${items.length}` );
    })
}


countCategories(categoriesRef, categoryItemsRef);


