// get Elemnt
    // bgbody
    const bgBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
    // body
    const body = document.body;
    // menu
    const menu = body.querySelector('.menu');
    // buttons:array
    const buttons = body.querySelectorAll('.menu__item');
    // bulb
    const bulb = body.querySelector('.menu__border');
    // activeItem
    let activeItem = body.querySelector('.active');




// click(item,index)
function click (item,index) {
    // if (item == active)return
    // if(activeItem == item) return;
    // if(active)return remove active
    if(activeItem){
        activeItem.classList.remove('active');
    }
     // item add active
    item.classList.add('active');
    // body bg = [index]
    body.style.backgroundColor = bgBody[index];
    // active = item
    activeItem = item;
}
    
    
   
    // offsetbulb(active)

//offsetbulb(active)
     // active.cordineate
     // const left 
     // bulb style 3dtransform
     
// foreach --> buttons
buttons.forEach((item, index)=> {
    // add eventlistener 
    item.addEventListener('click',()=>click(item,index))
        // click(item,index)
    
});

