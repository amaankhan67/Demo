let title=document.getElementById("title");
title.textContent="Hello";

let header=document.getElementById("main-header");
header.style.border='solid 10px #000';

let addtitle=document.getElementById("addtitle");
addtitle.style.color='green';
addtitle.style.fontWeight='bold';

var items=document.getElementsByClassName("list-group-item");
items[3].style.backgroundColor='green';

for( let a of items)
{
    a.style.fontWeight="bold";
}
