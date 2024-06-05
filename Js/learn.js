const memberList = ['小王', '张三', '电棍', '哈基米']
const rBackgroundImage = ['url(../Assets/rBackground1.jpg)', 'url(../Assets/rBackground2.png)']

const members = document.querySelector('#members')
const selector = document.querySelector('#selector')
const startButton = document.querySelector('#start')
const endButton = document.querySelector('#end')


let interval
function StartLucky() {

    interval = setInterval(() => {
        const luckyMember = memberList[Math.floor(Math.random() * memberList.length)]
        selector.innerHTML = luckyMember
    }, 100)
    console.log(`开始抽奖 ${interval}`)
}
function StopLucky() {
    console.log(`结束抽奖 ${interval}`);
    clearInterval(interval)
}

function SetBackgroundImage() {
    document.body.style.backgroundImage = rBackgroundImage[Math.floor(Math.random() * rBackgroundImage.length)]
}

function UpdateMember() {
    members.innerHTML = memberList.map(member => `<li>${member}</li>`).join('')
}

function AddMember(member) {
    memberList.push(member)
    UpdateMember()
}


SetBackgroundImage()
UpdateMember()
//StartLucky()
//setInterval(StartLucky,1000)
startButton.addEventListener('click', StartLucky)
endButton.addEventListener('click', StopLucky)