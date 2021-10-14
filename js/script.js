const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]


const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
//console.log(items.length);

const bigImgContainer = document.getElementById("big-img-container");
const littleImgContainer = document.getElementById("little-img-container");

let currentIndex = 2;

let bigImgList = [];
let littleImgList = [];
let textImgList = [];

//scorro ed inserisco img 
for (let i = 0; i < items.length; i++){

    let imgTag = document.createElement("img");
    imgTag.src = items[i];
    imgTag.alt = `#${i}`;
    imgTag.classList.add("big-img");
    bigImgContainer.append(imgTag);
    bigImgList[i]=imgTag;

    let asideImg = document.createElement("img");
    asideImg.src = items[i];
    asideImg.alt = `#${i}`;
    littleImgContainer.append(asideImg);
    littleImgList[i] = asideImg;

    let textImg = document.createElement("div");
    textImg.innerHTML = `<h3> ${title [i]} </h3> <h5> ${text[i]} </h5>`;
    textImg.classList.add("text-absolute");
    bigImgContainer.append(textImg);
    textImgList[i] = textImg;
    
    if (currentIndex === i){
        imgTag.classList.add("active");
        asideImg.classList.add("selected");
        textImg.classList.add("shown");
    }

}

//aggiungo addeventListener su arrow-up e arrow-down

const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");



arrowUp.addEventListener( "click", function(){

    const activeImg = bigImgContainer.querySelector(".active");
    activeImg.classList.remove("active");

    const shownText = bigImgContainer.querySelector(".shown");
    shownText.classList.remove("shown");
    
    const selectedImg = littleImgContainer.querySelector(".selected");
    selectedImg.classList.remove("selected");
  
    currentIndex--;

    if (currentIndex < 0 ){
        currentIndex = bigImgList.length - 1;
    }

    bigImgList[currentIndex].classList.add("active");
    littleImgList[currentIndex].classList.add("selected");
    textImgList[currentIndex].classList.add("shown");
    

})

arrowDown.addEventListener( "click", function(){

    const activeImg = bigImgContainer.querySelector(".active");
    activeImg.classList.remove("active");

    const shownText = bigImgContainer.querySelector(".shown");
    shownText.classList.remove("shown");

    const selectedImg = littleImgContainer.querySelector(".selected");
    selectedImg.classList.remove("selected");

    currentIndex++;

    if (currentIndex > bigImgList.length - 1 ){
        currentIndex = 0;
    }


    bigImgList[currentIndex].classList.add("active");
    littleImgList[currentIndex].classList.add("selected");
    textImgList[currentIndex].classList.add("shown");


})
