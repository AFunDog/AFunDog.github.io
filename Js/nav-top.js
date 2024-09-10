const navTopList = [
    { title: '主页', url: '#' }, 
    { title: 'HTML标签', url: '#' }, 
    { title: 'CSS', url: '#' }, 
    { title: 'JS', url: '#' }, 
    { title: '算法', url: '#' },
    { title: '其他分享', url: '#' }
]

let navTag = document.querySelector('#navTop')
let navGrid = document.createElement('ul')
navGrid.classList.add('nav-top')
 navGrid.style.gridTemplateColumns = `repeat(${navTopList.length},1fr)`
for(let i = 0;i < navTopList.length;i++){
    let navItem = document.createElement('li')
    let a = document.createElement('a')
    a.href = navTopList[i].url
    a.innerText = navTopList[i].title
    navItem.appendChild(a)
    navGrid.appendChild(navItem)
}
navTag.appendChild(navGrid)

const navTopItems = document.querySelectorAll('.nav-top a')

navTopItems[0].classList.add('hover')