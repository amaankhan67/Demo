localStorage.clear();
var submitBtn=document.getElementById("button");
var form=document.getElementById("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});
var i=1;

submitBtn.addEventListener('click',(e)=>{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var date=document.getElementById("date").value;
    var Obj={
        name: name,
        email: email,
        date: date
    };

    localStorage.setItem(`Obj${i++}`, JSON.stringify(Obj));
    //NEW LIST
    var newList=document.createElement('li');
    newList.setAttribute('class','list-group-item');
    var newText=document.createTextNode(name+" "+email+" "+date);
    newList.appendChild(newText);

    //NEW DELETE BUTTON
    var newButton=document.createElement('button');
    newButton.setAttribute("class","btn btn-danger btn-sm float-right");
    var newTextButton=document.createTextNode('Delete');
    newButton.appendChild(newTextButton);


    var parent=document.getElementById("items");
    parent.appendChild(newList);
    parent.appendChild(newButton);
});

//delete Button
var itemList=document.getElementById("items");
itemList.addEventListener('click',(e)=>{
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          localStorage.removeItem(`Obj${Array.from(li).indexOf(li)}`);
          itemList.removeChild(li);
        }
});
