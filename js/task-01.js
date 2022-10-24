//Var1
const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

itemEl.forEach(function(categories){
console.log("Category:", categories.firstElementChild.textContent);
console.log("Elements:", categories.lastElementChild.children.length);
})

//Var2

for (let i = 0; i < itemEl.length; i += 1) {
console.log("Category:", itemEl[i].firstElementChild.textContent);
console.log("Elements:", itemEl[i].lastElementChild.children.length);  
}

//for ( itemE of itemEl) {
//console.log("Category:", itemE.firstElementChild.textContent);
//console.log("Elements:", itemE.lastElementChild.children.length);  
//}