const boxs= document.querySelectorAll(".casebox");
const contentBoxs= document.querySelectorAll(".case-contentbox");
const adds = document.querySelectorAll(".add");
const closes = document.querySelectorAll(".close");


function selectElement(e){


removeClose();
removeAdd();

const contentItem = document.querySelector(`#${this.id}-content`);
const iconClose = document.querySelector(`#${this.id}-icon-close`);
const iconAdded = document.querySelector(`#${this.id}-icon-add`);

if(contentItem.classList.contains("show")){
  
  contentItem.classList.remove("show");
  iconClose.style.display = "none";
  iconAdded.style.display = "flex";

}else{
  
  removeShow();
  contentItem.classList.add("show");
  iconClose.style.display = "flex";
  iconAdded.style.display = "none";
}
console.log(this,5555)



};



function removeClose(){
closes.forEach(function(close){
close.style.display = "none";
})

};

function removeAdd(){
adds.forEach(function(add){
add.style.display = "flex";

})

};

function removeShow(){
 
 contentBoxs.forEach(function(contentBox){
  contentBox.classList.remove("show");
 });
 
};





boxs.forEach(function(box){

  box.addEventListener("click",selectElement);

});