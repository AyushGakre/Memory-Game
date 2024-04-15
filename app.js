const cardarr = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }
    
]
cardarr.sort(()=>0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
let result = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
const cardWon = []
function createBoard(){
    for(let i = 0; i < cardarr.length ; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard()

function checkmatch(){
    const cards = document.querySelectorAll('img')
    if(cardChosen[0] == cardChosen[1]){
        alert('You found a match')
        cards[cardChosenId[0]].setAttribute('src','images/white.png')
        cards[cardChosenId[1]].setAttribute('src','images/white.png')
        cards[cardChosenId[0]].removeEventListener('click',flipcard)
        cards[cardChosenId[1]].removeEventListener('click',flipcard)
        cardWon.push(cardChosen)
        console.log(cardWon)
    }
    else{
        cards[cardChosenId[0]].setAttribute('src','images/blank.png')
        cards[cardChosenId[1]].setAttribute('src','images/blank.png')
    }
    result.textContent = cardWon.length;
    cardChosen = []
    cardChosenId = []
    if(cardWon.length == (cardarr.length/2)){
        alert('Congratulation')
    }
}


function flipcard(){
    console.log(cardarr)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardarr[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src',cardarr[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkmatch,500)
    }

}

