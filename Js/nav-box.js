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

const navListContainer = document.querySelector('.nav-box-list')
const showImage = document.querySelector('.nav-box-img')
const leftButton = document.querySelector('.nav-box-img-left')
const rightButton = document.querySelector('.nav-box-img-right')
const sliderContainer = document.querySelector('.nav-box-slider')


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
    // sliderContainer.innerHTML = ''
    for(let i = 0;i < imageList.length;i++){
        let point = document.createElement('div')
        point.dataset.id = i
        point.classList.add('slider-point')
        if(ptr == i){
            point.classList.add('active-point')
        }
        sliderContainer.appendChild(point)
        sliderList.push(point)
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
        let link = document.createElement('div')
        let link_a = document.createElement('a')
        link_a.href = NavUriList[i].url
        link_a.innerText = NavUriList[i].title
        link.classList.add('nav-box-item')
        link.appendChild(link_a)
        navListContainer.appendChild(link)
        // navListContainer.innerHTML += 
        // `<div class="nav-box-item"><a href="${NavUriList[i].url}">${NavUriList[i].title}</a></div>`
    }
}


showImage.style.backgroundImage = imageList[ptr]


leftButton.addEventListener('click',MoveImageToPrev)
rightButton.addEventListener('click', MoveImageToNext)

InitLinks()
InitSliders()
UpdateSliders()