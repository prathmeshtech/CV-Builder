 alert("just testing");
function addWE(){
    console.log("adding new experience");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter here');

    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addAQ(){
    console.log("adding new qualification");
    let newNode1 = document.createElement("textarea");
    newNode1.classList.add("form-control");
    newNode1.classList.add("aqField");
    newNode1.classList.add("mt-1");
    newNode1.setAttribute("rows",2);
    newNode1.setAttribute('placeholder','Enter here');

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode1,aqAddButtonOb);
}