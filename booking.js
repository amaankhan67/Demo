localStorage.clear();
var submitBtn=document.getElementById("button");
var form=document.getElementById("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});
var i=1;

submitBtn.addEventListener('click',(e)=>{
    var Obj={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value
    };

    localStorage.setItem(`Obj${i++}`, JSON.stringify(Obj));
});
