//CRUD CRUD
var apiId="526bf09b064b4aac9eedd24a1422c520";
var apiName="restaurant";
var apilink=`https://crudcrud.com/api/${apiId}/${apiName}`;

var submitBtn=document.getElementById("button");
var form=document.getElementById("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});

function addDishtoTable(Obj)
{
    //NEW LIST
    var newList=document.createElement("li");
    newList.setAttribute('class','list-group-item');
    newList.setAttribute("id",Obj._id);
    var newText=document.createTextNode(Obj.dish+" "+Obj.price);
    newList.appendChild(newText);

    //DELETE BUTTON
    var newButton=document.createElement('button');
    newButton.setAttribute("class","btn btn-danger btn-sm float-right delete");
    var newTextButton=document.createTextNode('Delete');
    newButton.appendChild(newTextButton);

    newList.appendChild(newButton);
    //GETTING TABLE ID FOR LIST
    var tableName=Obj.table;
    var tableid;
    if(tableName=="Table 1")
        tableid="table1";
    else if(tableName=="Table 2")
        tableid="table2";
    else if(tableName=="Table 3")
        tableid="table3";

    var parent=document.getElementById(tableid);
    parent.appendChild(newList);
}

//DOM CONTENT LOADER
window.addEventListener("DOMContentLoaded", ()=> {
    axios.get(apilink)
        .then((response)=>{
            for(var i=0;i<response.data.length;i++)
            {
                addDishtoTable(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        })
})

submitBtn.addEventListener('click',(e)=>{
    console.log("Hello");
    var price=document.getElementById("price").value;
    var dish=document.getElementById("dish").value;
    var table=document.getElementById("table").value;
    var Obj={
        price: price,
        dish: dish,
        table: table
    };
    console.log(Obj);
    axios.post(apilink,Obj)
        .then((response) =>{
            alert('Data Saved Successfully!');
            addDishtoTable(response.data);
        })
        .catch((err) => alert("Error Found : "+err));
    
});

//DELETE BUTTON WORKING
var itemList=document.getElementById("section");
itemList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          axios.delete(`${apilink}/${li.id}`)
            .then((response) =>{
            alert('Data Deleted Successfully!');
            })
            .catch((err) => alert("Error Found : "+err));
        itemList.removeChild(li);
        //localStorage.removeItem(`${li.id}`);
        }
    }
});