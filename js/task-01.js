const categoriesRef = document.querySelector('#categories');
const categoryItemsRef = categories.querySelectorAll('.item')



function countCategories(category, items) {
    
console.log(`Number of categories: ${category.children.length}`)

    items.forEach(item => {
        
        const itemCl = item.querySelectorAll('li')

        console.log(`Category: ${item.firstElementChild.textContent}`);
       console.log(`Elements: ${itemCl.length}` );
    })
}


countCategories(categoriesRef, categoryItemsRef);


