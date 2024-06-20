VANTA.WAVES({
    el: "#main",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })

  let main = document.querySelector("#main");
  let cursor = document.querySelector(".cursor");
  let container = document.querySelector(".container");

let move = (elem) =>{
    cursor.style.top = elem.clientY + "px" ;
    cursor.style.left = elem.clientX + "px";
}

let move2 = (elem) =>{
    cursor.style.top = elem.clientY + "px";
    cursor.style.left = elem.clientX + "px";
    cursor.style.backgroundColor = '#1c7fb9';
}

  main.addEventListener('mousemove', move)
  container.addEventListener('mousemove', move2)
  container.addEventListener('mouseleave', function(){
    cursor.style.backgroundColor = '#fff';
  })