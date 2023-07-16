let title=document.getElementById("title");
title.textContent="Hello";

let header=document.getElementById("main-header");
header.style.border='solid 10px #000';

let addtitle=document.getElementById("addtitle");
addtitle.style.color='green';
addtitle.style.fontWeight='bold';

// var items=document.getElementsByClassName("list-group-item");
// items[3].style.backgroundColor='green';

// for( let a of items)
// {
//     a.style.fontWeight="bold";
// }

// var li=document.getElementsByTagName('li');
// for( let a of items)
// {
//     a.style.fontWeight="bold";
// }

// var item=document.querySelector("#item2");
// item.style.backgroundColor='green';

// var item2=document.querySelector("#item3");
// item2.style.display="none";

// var item3=document.querySelectorAll(".list-group-item");
// items3[2].style.color="green";

var ele=document.querySelectorAll("li:nth-child(odd)");
for(var i of ele)
{
    i.style.backgroundColor="green";
}

