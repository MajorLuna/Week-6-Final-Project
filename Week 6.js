class Player{
    constructor(){
        this.playerHand=[];
    }
}

class Card{
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
    describe(){
        return 'This card is the {this.value} of {this.suit}';
    
    }
}

class Deck{
    constructor(){; 
        this.deck =[]
        this.suit =["Spades", "Hearts", "Diamonds", "Clubs"];
        this.value =[ '1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13']
        this.rank =['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        // console.log("creating cards...");   


// Change here
    createCards();{
        console.log("creating cards...");
    for (let i = 0; i < this.suit.length; i++); {
        console.log(i,"suit","", this.suit[i]);
    }

    
    for (let j = 0; j < this.rank.length; j++); {
            console.log(i,'rank',"", this.rank[j]);
            
            let suits = this.suit[i];
            let value = this.value[v];
            let rank = this.rank[j];
            this.deck.push(newCard(suit, value, rank));   
    
}
    console.log(this.deck);

    dealShuffledDeck();{
        console.log(ShuffledCards);
        const ShuffledCards = this.deck.slice();
        const DeckShuffled = {}
    while (ShuffledCards.length > 0) {
        const randomindex = Math.floor(Math.random() * ShuffledCards.length);
        DeckShuffled.push(ShuffledCards[randomindex]);
        console.log(DeckShuffled);
        
    dealCards();{
        let newDeck = newDeck();
        newDeck.createcards();
        newDeck.shuffle();
        newDeck.dealCards();

        let playerOne = Player();
        let playerTwo = Player();
    for (let i = 0; 1 < ShuffledCards.length; i++){
        if(i<26){
            playerOne.playerHand.push(DeckShuffled[i]);
        } else{
            playerTwo.playerHand.push(DeckShuffled[i]);
        }
    }

        console.log(playerOne.playerHand);
        console.log(playerTwo.playerHand);
        console.log(playerOne.playerHand[2].value);
       
        let playerOneResult = 0;
        let playerTwoResult = 0;
   
        for( let i = 0; i < playerOne.playerHand.length; i++){
            if(playerOne.playerHand[i].value > playerTwo.playerHand[i].value){playerOneResult += 1;}
        else if(playerOne.playerHand[i].value < playerTwo.playerHand[i].value){playerTwoResult += 1;}
         else {
            playerOneResult += 0;
            playerTwoResult += 0;

        }
        console.log(playerOne, $(playerOneResult));
            console.log(playerTwo,$(playerTwoResult));
    }
        if(playerOneResult > playerTwoResult){
            console.log("Player One Wins !!!");
        }else if(playerTwoResult > playerOneResult){
            console.log("Player Two Wins !!!");
        } else{
            console.log("It's a TIE !!!");
        }
    }
}
    }
}
    }
}
