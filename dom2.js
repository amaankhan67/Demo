// var node=document.querySelector('#items');
// console.log(node);
// //Parent Node
// console.log(node.parentElement);

// //Last Element Child
// console.log(node.lastElementChild);

// //Last Child
// console.log(node.lastChild);

// //First Element Child
// console.log(node.firstElementChild);

// //First Child
// console.log(node.firstChild);

// //Create Child

// var newChild=document.createTextNode("Hello");
// node.appendChild(newChild);

// //Prev Sibling
// console.log(newChild.previousSibling);
// console.log(newChild.previousElementSibling);

// //Next Sibling
// console.log(node.nextSibling);
// console.log(node.nextElementSibling);

// //Creating New Element
// var newDiv=document.createElement('div');
// newDiv.className="hello";
// newDiv.setAttribute('title','New Div');
// newDiv.appendChild(newChild);

// //Insert Before "Items"
// var newClass=document.querySelector('#main');
// var h1=document.querySelector("#h1")
// newClass.insertBefore(newDiv,h1);

//INDEX2.HTML JS CODE
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
