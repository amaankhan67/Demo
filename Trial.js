const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';
ul.firstElementChild.style.color = 'green'
ul.children[1].innerText = 'Brad';
ul.children[1].style.color = 'yellow';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
