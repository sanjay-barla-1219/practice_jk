var mf = document.getElementById("myform");

mf.addEventListener('submit',addItem,false);


var lists = document.querySelector("#lists");

lists.addEventListener('click',removeItem,false);

var filter = document.getElementById('filter');
filter.addEventListener('keyup',searchItem,false);

// If we are not write false, when we click on submit button the data will be submitted to the server if not we view the data in the page itself.


function addItem(e){
    e.preventDefault();
    var hb = document.getElementById("first").value; //getting the value of text element

    // creating li element
    var l =  document.createElement("li");
    var text = document.createTextNode(hb);
    l.appendChild(text); //appending it to the li element

    //creating button

    var db = document.createElement("button");
    db.setAttribute("class","delete")
    var bt = document.createTextNode("X");
    db.appendChild(bt);

    //adding button to the li element
    l.appendChild(db);


    lists.appendChild(l);
    // console.log(l);
}


function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure! You want to delete? ")){
            var li = e.target.parentElement;
            lists.removeChild(li);
        }
    }
}

function searchItem(e){
    var text = e.target.value.toLowerCase();
    var items = document.getElementsByTagName("li");
    Array.from(items).forEach((item)=>{
        itemValue = item.firstChild.textContent;
        if(itemValue.toLowerCase().indexOf(text)!=-1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    })
}