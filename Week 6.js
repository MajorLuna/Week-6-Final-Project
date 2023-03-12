class Player{
    constructor(name){
        this.playerHand=[];
        this.score= 0;
        this.name= name;
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
    constructor(){ 
        this.deck =[]
        let suit =["Spades", "Hearts", "Diamonds", "Clubs"];
        let value =[ '1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13']
        let rank =['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        // console.log("creating cards...");   
        for (let i = 0; i < suit.length; i++) {
            // console.log(i,"suit","", this.suit[i]);
    
        
        for (let j = 0; j < rank.length; j++) {
                // console.log(i,'rank',"", this.rank[j]);
                
                // let suit = this.suit[i];
                // let value = this.value[j];
                // let rank = this.rank[j];
                this.deck.push(new Card(suit[i], j, rank[j])); 
        }  
    }    
}  
    shuffle(){
        this.deck.length
        for(let i = this.deck.length -1; i >= 0; i--){
            const newCard = Math.floor(Math.random()* this.deck.length);
            const oldCard = this.deck[newCard];
            this.deck[newCard]= this.deck[i];
            this.deck[i] = oldCard;
        }
    }
}

let newDeck = new Deck();
newDeck.shuffle();
console.log(newDeck);
           
    class DealCards {
        constructor(){
         let newDeck = new Deck();
        newDeck.createcards();
        newDeck.shuffle();
     let playerOne = ('Aura');
        let playerTwo = ('Summer');
    for (let i = 0; i < newDeck.length; i++){
        if(i<26){
            playerOne.playerHand.push(newDeck[i])
        } else{
            playerTwo.playerHand.push(newDeck[i])
        }
    
        console.log(playerOne.playerHand)
        console.log(playerTwo.playerHand)
       

         let playerOneResult = 0;
        let playerTwoResult = 0;
   
        for( let i = 0; i < Player.playerHand.length; i++){
            if(Player.playerHand[i].value > Player.playerHand[i].value){playerOneResult += 1;}
        else if(Player.playerHand[i].value < Player.playerHand[i].value){playerTwoResult += 1;}
         else {
            playerOneResult += 0;
            playerTwoResult += 0;
         }
        }
         console.log(Player, $(playerOneResult));
            console.log(Player,$(playerTwoResult));

        while (playerOneResult > playerTwoResult){
            console.log("Player One Wins !!!");
        }  if(playerTwoResult > playerOneResult){
            console.log("Player Two Wins !!!");
        } else{
            console.log("It's a TIE !!!");
        }
    }
}
    }