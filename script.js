
let users = [{
    name : "kazii",
    image : "https://images.unsplash.com/photo-1653070200345-be09c5701282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time : "Today 3:40pm",
    status : "https://images.unsplash.com/photo-1653070200345-be09c5701282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    name : "manish",
    image : "https://images.unsplash.com/photo-1656060937473-574b978f2210?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time : "Today 10:40pm",
    status : "https://images.unsplash.com/photo-1656060937473-574b978f2210?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},{
    name : "Yashraj",
    image : "https://images.unsplash.com/photo-1651301216735-4cae6d672d34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time : "Today 3:40pm",
    status : "https://images.unsplash.com/photo-1651301216735-4cae6d672d34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},{
    name : "Chintu",
    image : "https://images.unsplash.com/photo-1652380277329-03114cea2450?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time : "Today 1:40pm",
    status : "https://images.unsplash.com/photo-1652380277329-03114cea2450?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},{
    name : "Vaibhav Chauhan",
    image : "https://images.unsplash.com/photo-1653718189980-69805c532c67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time : "Today 5:30pm",
    status : "https://images.unsplash.com/photo-1653718189980-69805c532c67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},{
    name : "Hemant Athole",
    image : "https://images.unsplash.com/photo-1658857290594-851047924635?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time : "Today 3:40pm",
    status : "https://images.unsplash.com/photo-1658857290594-851047924635?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},{
    name : "Ankush Morle",
    image : "https://images.unsplash.com/photo-1654417201424-f85ae3cc8cb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    time : "Today 3:40pm",
    status : "https://images.unsplash.com/photo-1654417201424-f85ae3cc8cb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}]

function ShowStatus(){
    let clutter = "";

    users.forEach(function(detail,index){
        clutter +=`
                <div class="bottom">
                    <div class="user">
                        <img src="${detail.image} id="${index}"
                            alt="">
                        <div class="username">
                            <h4>${detail.name}</h4>
                            <p>${detail.time}</p>
                        </div>
                    </div>  
                </div>`
    })

    let userData = document.querySelector(".profile");
    userData.innerHTML = clutter;
}

ShowStatus();

let user = document.querySelectorAll(".user");

user.forEach(function(card){

    let istatus = card.querySelector("h4");
    let para = card.querySelector("p")
    let img = card.querySelector("img");
    let uprofile = document.querySelector(".user-status")
    let userimage = document.querySelector(".user-status img")
    let userStatusimage = document.querySelector(".user-status .status img")
    let close = document.querySelector(".user-status  .heading .close")
    let userName = document.querySelector(".user-status h4")
    let userPara = document.querySelector(".user-status p");
    let flag = 0;

        img.addEventListener("click",()=>{
        if(flag === 0){
           
            uprofile.style.display = "block";
            let upic = img.getAttribute("src")
            userimage.setAttribute("src",upic);
            userName.innerText = istatus.innerText;
            userPara.innerText = para.innerText;
            userStatusimage.setAttribute("src",upic);

            flag = 1;
           
   
        }
        close.addEventListener("click",function(){
            uprofile.style.display = "none";
            flag = 0;  
        })

    })
})