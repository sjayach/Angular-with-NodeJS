
var card = function(rank,suit){
        this.rank = rank;
        this.suit = suit;
}

card.prototype.value = function() {
     	var retValue = 0;
      switch(this.rank) {
        case 'Ace':
          retValue = 1;
          break;
        case 'Jack':
        case 'Queen':
        case 'King' :
          retValue = 10;
          break;
        default:
          retValue = Number(this.rank);
          break;
      }
      return retValue;
}

card.prototype.toString = function() {
    return this.rank + " of " + this.suit;
};

var card1 = new card('Ace', 'Spades');
var card2 = new card('9', 'Hearts');

console.log( card1.value() ); // Prints 11
//console.log(card1.toString() ); // Ace of Spades
console.log( 'The value of card1 is: ' + card1);
console.log( card2.value() ); // Prints 9
console.log( 'The value of card2 is: ' + card2);
//console.log( card2.toString() ); // 9 of Hearts


var deck = function() {
		this.cards = [];
		var rank = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
		var suit = ['Spade', 'Diamond', 'Club', 'Hearts'];

		for(var i=0 ; i<rank.length;i++) {
			for(var j = 0;j<suit.length;j++) {
				this.cards.push(new card(rank[i], suit[j]));
			}
		}
}
	
deck.prototype.deal = function() {
		var dealCard = this.cards[0];
		this.cards.splice(0,1);
		return dealCard;
}
deck.prototype.remaining = function() {
		return this.cards.length;

}
deck.prototype.shuffle = function() {
	for (var i = this.cards.length - 1; i > 0; i--) {
       	var j = Math.floor(Math.random() * (i + 1));
       	var temp = this.cards[i];
       	this.cards[i] = this.cards[j];
       	this.cards[j] = temp;
    }
    	
}
deck.prototype.reset = function(){
  this.constructor();
}

var myDeck = new deck();
myDeck.shuffle();

var hand1 = [];
hand1.push( myDeck.deal() );
hand1.push( myDeck.deal() );
// Note, the output below will vary since the deck will be shuffled

console.log( 'Hand 1: '+ hand1[0] + ' '+ hand1[1] ); // Hand 1: 2 of Hearts 9 of Clubs 

var hand2 = [];
hand2.push( myDeck.deal() );
hand2.push( myDeck.deal() );

console.log( 'Hand 2: ' + hand2[0] + ' ' + hand2[1] ); // Hand 2: Queen of Diamonds Jack of Clubs

console.log('The value of Hand 1 is: '+ hand1[0].value() + ' + ' + hand1[1].value() + ' = '  , hand1[0].value() + hand1[1].value());
console.log('The value of Hand 2 is: ' + hand2[0].value() + ' + ' + hand2[1].value() + ' = ', hand2[0].value() + hand2[1].value());

console.log('There are ', myDeck.remaining(), ' cards remaining in the deck'); //48

myDeck.reset();

console.log('After Reset, there are ', myDeck.remaining(), ' cards remaining in the deck'); //52