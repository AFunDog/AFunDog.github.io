
const ShowCardInfos = [
    { url: '../Assets/sample2.png', saying: '世界是属于你们的', author: '毛主席' },
    { url: '../Assets/sample3.jpg', saying: '死亡不属于工人阶级', author: '列宁' }
]
const ShowCardContainer = document.querySelector('.show');


function AddShowCard(imgUri, saying, author) {
    ShowCardContainer.innerHTML +=
        `<div class="show-card def-shadow">
        <img src="${imgUri}">
            <p>${saying}</p>
        <h4>——${author}</h4>
    </div>`
}

function InitShowCards() {
    for (let i = 0; i < ShowCardInfos.length; i++) {
        AddShowCard(ShowCardInfos[i].url, 
            ShowCardInfos[i].saying, 
            ShowCardInfos[i].author)
    }
}

InitShowCards()