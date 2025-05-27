
fetch('./data.json')
    .then(function (result){
        result.json()
            .then(function(data){
                

                
                
                
            
                
                for(let i = 0; i < data.length; i++){
           
                    let container = document.querySelector(".container");
                    let extCard = document.createElement("div");
                    extCard.classList.add("ext-card");
                    let top = document.createElement("div");
                    top.classList.add("top");
                    top.innerHTML = 
                        `<div class="ext-icon">
                            <img src="${data[i].logo}">
                        </div>
                        <div class="ext-title">
                            <h3 class="ext-name">${data[i].name}</h3>
                            <p class="ext-desc">${data[i].description}</p>
                        </div>`
                    let bottom = document.createElement("div");
                    bottom.classList.add("ext-tools");
                    let removeButton = document.createElement("button");
                    removeButton.id = "removeButton";
                    removeButton.innerText = "Remove";
                    removeButton.addEventListener("click", (e)=>{
                        removeButton.parentElement.parentElement.remove();
                        count.innerText = `(${container.childNodes.length})`;
                    })
                    // bottom.innerHTML = 
                    // `<button id="removeButton">Remove</button>`
                    let statue = document.createElement("div");
                    statue.classList.add(`${data[i].isActive}`);
                    statue.addEventListener("click", function(){
                        if (statue.className == "true"){
                            statue.className = "false";
                        }
                        else{
                            statue.className = "true";
                        }
                    })
                    
                    bottom.append(removeButton, statue);
                    extCard.append(top, bottom);
                    container.appendChild(extCard);
                    let count = document.getElementById("extCount");
                    count.innerText = `(${container.childNodes.length})`;

                    let allFilterButton = document.querySelector(".all");
                    let activeFilterButton = document.querySelector(".active");
                    let inActiveFilterButton = document.querySelector(".inactive");
                    let filterButtons = [allFilterButton, activeFilterButton, inActiveFilterButton];
                    filterButtons.forEach((item, index) =>{
                        item.addEventListener("click", function(){
                            item.classList.add("choosed");
                            if(index==0){
                                extCard.classList.remove("hidden");
                                filterButtons[index+1].classList.remove("choosed");
                                filterButtons[index+2].classList.remove("choosed");
                            }
                            else if(index == 1){
                                if(extCard.childNodes[1].childNodes[1].className=="false"){
                                    extCard.classList.add("hidden");
                                }
                                else{
                                    extCard.classList.remove("hidden");
                                }
                                filterButtons[index-1].classList.remove("choosed");
                                filterButtons[index+1].classList.remove("choosed");
                            }
                            else{
                                if(extCard.childNodes[1].childNodes[1].className=="true"){
                                    extCard.classList.add("hidden");
                                }
                                else{
                                    extCard.classList.remove("hidden");
                                }
                                filterButtons[index-1].classList.remove("choosed");
                                filterButtons[index-2].classList.remove("choosed");
                            }
                        })
                    })
                    
                }
                

            })
    })


let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function(){
    let logoImg = document.getElementById("logoImg");
    let current = document.head.getElementsByTagName("link")[1].getAttribute("href");
    if(current == "/css/style.css"){
        document.head.getElementsByTagName("link")[1].setAttribute("href", "./css/dark.css");
        document.getElementById("toggleImg").setAttribute("src", "./assets/images/icon-sun.svg");
        logoImg.setAttribute("src", "/assets/images/logo-2.png");
    }
    else{
        document.head.getElementsByTagName("link")[1].setAttribute("href", "./css/style.css");
        document.getElementById("toggleImg").setAttribute("src", "./assets/images/icon-moon.svg");
        logoImg.setAttribute("src", "./assets/images/logo.svg");
    }
    
    
})













    //  <div class="container">
    //   <div class="ext-card">
    //     <div class="top">
    //       <div class="ext-icon">
    //         <img src="/assets/images/logo-console-plus.svg">
    //       </div>
    //       <div class="ext-title">
    //        <h3 class="ext-name">DevLens</h3>
    //         <p class="ext-desc">Quickly inspect page layouts and visualize element boundaries.</p>
    //       </div>
    //     </div>
    //     <div class="ext-tools">
    //       <button>Remove</button>
    //       <div class="active-inactive-switch"></div>
    //     </div>
    //   </div>
    //  </div>
