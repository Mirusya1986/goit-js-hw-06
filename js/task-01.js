
console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);


const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);

list.insertAdjacentHTML("beforebegin", "<h2>Number of Categories: 3</h2>");
// list.insertAdjacentHTML("beforeend", "<h2>Category: listItem</h2>");