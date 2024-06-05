// const showCards = document.querySelectorAll('.show-card')

// for(let i = 0;i < showCards.length;i++){
//     if(!showCards[i].querySelector('p')){
//         continue
//     }
//     showCards[i].addEventListener('mouseenter',()=>{
//         console.log(showCards[i].querySelector('p').innerText)
//     })
// }



const imageList = [
    'url(../Assets/rBackground1.jpg)',
    'url(../Assets/headBackground.png)',
    'url(../Assets/rBackground2.png)',
]

const sliderList = []

const NavUriList = [
    {url:'Pages/无职转生.html',title:'无职转生'},
    {url:'Pages/算法资料.html',title:'算法资料'},
    {url:'Pages/网页展示样例.html',title:'网页展示样例'},
    {url:'Pages/月之晨曦.html',title:'月之晨曦专属页面'},
    {url:'Pages/JS学习.html',title:'JS学习'},
]

const navListContainer = document.querySelector('.nav-list')
const showImage = document.querySelector('.nav-img')
const leftButton = document.querySelector('.nav-img-left')
const rightButton = document.querySelector('.nav-img-right')
const sliderContainer = document.querySelector('.nav-slider')


let ptr = 0

function UpdateImage(){
    showImage.style.backgroundImage = imageList[ptr]
}

function MoveImageToNext(){
    console.log(`${ptr}`)
    ptr = (ptr + 1) % imageList.length
    UpdateImage()
    UpdateSliders()
}
function MoveImageToPrev() {
    console.log(`${ptr}`)
    ptr = (ptr - 1 + imageList.length) % imageList.length
    UpdateImage()
    UpdateSliders()
}

function InitSliders(){
    sliderContainer.innerHTML = ''
    for(let i = 0;i < imageList.length;i++){
        if(ptr == i){
            sliderContainer.innerHTML += `<div data-id="${i}" class="slider-point active-point"></div>`;
        }
        else{
            sliderContainer.innerHTML += `<div data-id="${i}" class="slider-point"></div>`;
        }
    }
    for(let i = 0;i < imageList.length;i++){
        let slider = document.querySelector(`.slider-point:nth-child(${i + 1})`)
        sliderList.push(slider)
    }
    sliderContainer.addEventListener('click',(e)=>{
        if(e.target.dataset.id === undefined) return
        ptr = Number(e.target.dataset.id)
        UpdateImage()
        UpdateSliders()
    })
}


function UpdateSliders(){
    for(let i = 0;i < sliderList.length;i++){
        sliderList[i].classList.remove('active-point')
    }
    sliderList[ptr].classList.add('active-point')
}

function InitLinks(){
    for(let i = 0;i < NavUriList.length;i++){
        navListContainer.innerHTML += 
        `<div class="nav-item"><a href="${NavUriList[i].url}">${NavUriList[i].title}</a></div>`
    }
}


showImage.style.backgroundImage = imageList[ptr]


leftButton.addEventListener('click',MoveImageToPrev)
rightButton.addEventListener('click', MoveImageToNext)

InitLinks()
InitSliders()
UpdateSliders()