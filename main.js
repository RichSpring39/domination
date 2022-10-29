function addstrikethrough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = "line-through";
}

addstrikethrough();

function setImage(id, url){

    let image = document.querySelector('#' + id);
    //or `#${id}`
    image.src = url;
    //height adjustment
    image.style.height = '300px'
}
setImage('image-1', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7e21bf127966171.614c7a26b0eb1.png');
setImage('image-2', 'https://images-platform.99static.com//a6A5JMjcKkXSEmXPuqItzatTXuQ=/0x485:1800x2285/fit-in/590x590/99designs-contests-attachments/129/129893/attachment_129893026');
setImage('image-3', 'https://static.displate.com/280x392/displate/2022-01-05/233217bd48834f92d11e42e5cc0c7bfa_8e4ae9802555ce961b72d7e227abecdf.jpg');

function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}

removeArgument();
removeArgument();

function textsize(id, size){
    let text1 = document.querySelector('#' + id);
    text1.style.fontSize = size;
}
textsize('text-1', '100px');

function addElementToList(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
}
let newImage = document.createElement('img');
newImage.src = "https://i.pinimg.com/originals/46/8b/5b/468b5bc544590310858454ce3757b67e.jpg";
newImage.style.height = '200px'

let newImage2 = document.createElement('img');
newImage2.src = "https://cdnb.artstation.com/p/assets/images/images/026/133/209/large/luis-antonio-fondo-final4.jpg?1587979075";
newImage2.style.height = '200px'

let newText = document.querySelector('li');
newText.innerText = "Hey!!"
addElementToList(newImage);
addElementToList(newText);
addElementToList(newImage2);

function setImageHight(img){
    img.style.height = '30px';

}
let imgHeight = document.querySelector("#image-3");
setImageHight(imgHeight);

function Invisible(el){
    el.className = 'invisible'
}
let header = document.querySelector('h1');
Invisible(header);




