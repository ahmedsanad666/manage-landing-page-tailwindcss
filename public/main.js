const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click",function(){
const list = btn.classList;
if(!list.contains('open')){
    list.add('open');
    menu.classList.remove('hidden')
  
}else{
    list.remove('open')
    menu.classList.add('hidden')
}
    
})