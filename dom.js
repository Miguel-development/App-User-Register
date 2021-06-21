
var miP = "";

document.addEventListener("click",e=>{

    if(e.target.matches("#adelanteUser")){
        console.log(e.target);
        addNewUser();
    }
    if (e.target.matches("#deleteUser")) {
        // alert(miP);
        deleteUserSelected(miP);
    }
    if (e.target.matches("p")){
        //change the backgroundColor to identify no More;
        var allPs = document.querySelectorAll("p");

        allPs.forEach(xP => {
            xP.style.backgroundColor = 'rgba(155, 8, 15, 0.808)';
            xP.style.fontWeight = "normal";
            xP.style.color = "whitesmoke";
        
        });
        e.target.style.backgroundColor = "rgba(226, 106, 7, 0.863)";

        e.target.style.color = "black";
        e.target.style.fontWeight = "bold";
        miP = e.target;
    }

},false);


function deleteUserSelected(userSelected) {
    var elePs = document.getElementsByTagName("p");
    if (elePs.length == 0) {
        alert("Database is empty!");
        return false;
    }else{
       //Here we selected a p element!, then we must to delete it
       var parentDIV = document.getElementsByClassName("user-content")[0];
       var rptaRemove = window.confirm("Are you sure you want to delete this User : " + userSelected.innerHTML.toUpperCase());

        if (rptaRemove == null || rptaRemove == false) {
            //cancel
            var allPs = document.querySelectorAll("p");

            allPs.forEach(xP => {
                xP.style.backgroundColor = 'rgba(155, 8, 15, 0.808)';
                xP.style.fontWeight = "normal";
                xP.style.color = "whitesmoke";
            });
        } else {
            parentDIV.removeChild(userSelected);
            alert("USER : " + userSelected.innerHTML.toUpperCase() + " was deleted.");
            console.clear();
            // console.log(userSelected);
        }

    }
}



var myDBUsers = new Set(["User"]);

function addNewUser(){
    var userName = window.prompt("Type your user name :","User");
    
    if(userName === null){
        return 0;
    }else if(userName.trim() === ""){
        alert(`${userName} UserName cannot be empty!`);
        return 0;
    }
    else{

        // here you send a userName but we have to validate that's be one and only user in the database.
        //First at all, we evaluate that userName does not exist in the database.
        if (!myDBUsers.has(userName.trim())){
            myDBUsers.add(userName);

            var eleP = document.createElement("p");
            var newNodeText = document.createTextNode(userName);
        
            var parentDIV = document.getElementsByClassName("user-content")[0];
        
            eleP.setAttribute("class","new-user");
            eleP.appendChild(newNodeText);
            parentDIV.appendChild(eleP);
        }else{
            alert(`${userName} already exists in the database!`);
            return false;
        }
        
    }
}















// var cuadrado = document.body.querySelectorAll("div");
// var izq;

// ///////////////////////event object
// document.addEventListener("click",e=>{
//     if(e.target.matches("button:nth-of-type(1)")){
//         registraDatos();
//     }
// });





















// //////////////////Browser Object Document
// function registraDatos() {
//     // var rpta = window.confirm("Are you sure you want to accept this?");
//     // console.log(rpta);
//     var rptaPrompt = window.prompt("type your name","User");
//     console.log(rptaPrompt);
// }

















///////////////////eventos con addEventListener

// function evel(e){
    
    //     console.log(`dentro de ${this.className} dió click ${e.target.className}`);
    //     e.target.style.backgroundColor = 'steelblue';
    //     // e.stopPropagation();
    
    
    // }
    // cuadrado.forEach(x=>{
        
        //     x.addEventListener("click",evel,{
            
            //         capture:false
            //         });
            // });
            
            
            ///////////////////////////Delegacion de eventos usando el document
            
            // document.addEventListener("click",e=>{
                
                //     if(e.target.matches(".grand-chil-content")){
                    //         e.target.style.backgroundColor = 'steelblue';
                    //     }else{
                        //         if(e.target.matches("button:nth-of-type(1)")){
                            //             console.log("se ha prevenido adelantar");
                            //             e.preventDefault();
                            //             console.log(e.cancelable);
                            //             console.log("funcion ejecutada!");
                            //         }else{
                                //             console.log("i am not what you are looking for!");
                                //         }
                                
                                //     }
                                
                                
                                // },{capture:false});
                                
                                // window.addEventListener("load",e=>{
                                //         //it loads all files
                                //     console.log(`window loaded in : ${e.timeStamp.toFixed(1)} mseg.`);
                                
                                // },false);
                                
                                // document.addEventListener("DOMContentLoaded",e=>{
                                // //only loads the html document
                                //     console.log(`document loaded in : ${e.timeStamp.toFixed(1)} mseg.`);
                                
                                // },false);
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                // setTimeout(()=>{
                                    //    console.log("hola");
                                    // },500);
                                    

// function listas(){
//     var htmlNodeList = document.querySelectorAll("ul>li");

//     var htmlCollection = document.getElementsByTagName("li");

//     console.log(htmlNodeList);
//     console.log(htmlCollection);

//     htmlNodeList.forEach(function(e){
//         console.log(e.innerHTML);
//     });
//     for (const X of htmlCollection) {
//         console.log(X.innerText);
//     }
//     /* Array.prototype.forEach.call(htmlCollection, function(e){
//         console.log(e.innerHTML);
//         Array.prototype.forEach.call(e.children, function(e){
//             console.log(e.innerText);
//         });
//     }); */
    
// }
// listas();