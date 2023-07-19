localStorage.clear();
var submitBtn=document.getElementById("button");
var form=document.getElementById("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});

submitBtn.addEventListener('click',(e)=>{
    console.log("Hello");
    var formname=document.getElementById("name").value;
    var formemail=document.getElementById("email").value;
    var formdate=document.getElementById("date").value;

    localStorage.setItem("name", formname);
    localStorage.setItem("email", formemail);
    localStorage.setItem("date",formdate);
});
