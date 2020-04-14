document.addEventListener('DOMContentLoaded', () => {

    var cardArray = [{
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
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
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
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
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
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
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ];

    cardArray.sort(() => { 0.5 - Math.random() });

    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');

    var cardsChosen = [];
    var cardIdChosen = [];
    var cardsWon = [];

    function formCardDisplay() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('card-id', i);
            card.setAttribute('src', 'images/blank.png');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('card-id');
        if (cardIdChosen.length != 0 && cardId == cardIdChosen[0]) {
            alert('Please select another card!!!');
        } else {
            cardsChosen.push(cardArray[cardId]);
            cardIdChosen.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch(), 50000);
            }
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        var cardOneId = cardIdChosen[0];
        var cardTwoId = cardIdChosen[1];
        if (cardArray[cardOneId].name === cardArray[cardTwoId].name) {
            setTimeout(alert("You have found a match!!"), 5000);
            cards[cardOneId].setAttribute('src', 'images/white.png');
            cards[cardTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardOneId);
        } else {
            setTimeout(alert("Not a match. Please try again!!"), 5000);
            cards[cardOneId].setAttribute('src', 'images/blank.png');
            cards[cardTwoId].setAttribute('src', 'images/blank.png');
        }
        cardsChosen = [];
        cardIdChosen = [];
        result.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            result.textContent = 'You have found all the matches!!!';
        } else {
            result.getText
        }
    }

    formCardDisplay();
});