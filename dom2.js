var node=document.querySelector('#items');
console.log(node);
//Parent Node
console.log(node.parentElement);

//Last Element Child
console.log(node.lastElementChild);

//Last Child
console.log(node.lastChild);

//First Element Child
console.log(node.firstElementChild);

//First Child
console.log(node.firstChild);

//Create Child

var newChild=document.createTextNode("Hello");
node.appendChild(newChild);

//Prev Sibling
console.log(newChild.previousSibling);
console.log(newChild.previousElementSibling);

//Next Sibling
console.log(node.nextSibling);
console.log(node.nextElementSibling);

//Creating New Element
var newDiv=document.createElement('div');
newDiv.className="hello";
newDiv.setAttribute('title','New Div');
newDiv.appendChild(newChild);

//Insert Before "Items"
var newClass=document.querySelector('#main');
var h1=document.querySelector("#h1")
newClass.insertBefore(newDiv,h1);
