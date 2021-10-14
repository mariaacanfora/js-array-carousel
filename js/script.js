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

let startIndex = 1;


//scorro ed inserisco img 
for (let i = 0; i < items.length; i++){

    let imgTag = document.createElement("img");
    imgTag.src = items[i];
    imgTag.alt = `#${i}`;
    imgTag.classList.add("big-img");
    bigImgContainer.append(imgTag);

    let asideImg = document.createElement("img");
    asideImg.src = items[i];
    asideImg.alt = `#${i}`;
    littleImgContainer.append(asideImg);

    
    if (startIndex === i){
        imgTag.classList.add("active");
    }

}

