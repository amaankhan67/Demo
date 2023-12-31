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

    localStorage.setItem(email, JSON.stringify(Obj));
    //NEW LIST
    var newList=document.createElement('li');
    newList.setAttribute('class','list-group-item');
    newList.setAttribute("id",email);
    var newText=document.createTextNode(name+" "+email+" "+date);
    newList.appendChild(newText);

    //NEW DELETE BUTTON
    var newButton=document.createElement('button');
    newButton.setAttribute("class","btn btn-danger btn-sm float-right delete");
    var newTextButton=document.createTextNode('Delete');
    newButton.appendChild(newTextButton);

    //NEW EDIT BUTTON
    var editButton=document.createElement('button');
    editButton.setAttribute("class","btn btn-danger btn-sm float-right edit");
    editButton.appendChild(document.createTextNode('Edit'));


    var parent=document.getElementById("items");
    newList.appendChild(newButton);
    newList.appendChild(editButton);
    parent.appendChild(newList);
});

//delete Button
var itemList=document.getElementById("items");
itemList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
          localStorage.removeItem(`${li.id}`);
        }
    }
});

//Edit Button
itemList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('edit'))
    {
        var li = e.target.parentElement;
        itemList.removeChild(li);
        var obj=JSON.parse(localStorage.getItem(`${li.id}`));
        document.getElementById("name").value=obj.name;
        document.getElementById("email").value=obj.email;
        document.getElementById("date").value=obj.date;
        localStorage.removeItem(`${li.id}`);
    }
});
