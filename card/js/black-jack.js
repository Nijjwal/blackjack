//global variables
var me; //me is hand of palyer2
var dealer; //dealer is hand of dealer
var winMessage; //winMessage holds the result of who won or lost 
                //the game or whether the game was tied 
var gameOver = false; //this value is set when the game is over, 

var gameWidth="800";
var gameHeight="460";

var sourceWidth = 80; //do not touch
var sourceHeight = 120; //do not touch
var destWidth = 80; //width size of the card to display
var destHeight = 120; //height size of the card to display


var player2clickeddealbtn = false;

var showdealersecondcardwithfrontup = false;
/**
Balance of Second User
**/
var p2balance = 1000;
var p2bet = 0;
var MINIMUMBET = 5;
var MAXIMUMBET = 500;
/**
Balance of Second User ends
**/




/**
Get canvas html of Player2's  balanceHUD
**/
var p2balanceHUD = document.getElementById('p2balanceHUD');
var contextofp2balanceHUD = p2balanceHUD.getContext('2d');
contextofp2balanceHUD.fillStyle = "hsla(0,0%,0%,0.5)";
contextofp2balanceHUD.font = "bold 20px Arial"; 
/**






/**
Import canvas elements of player2  from 'index.html' file  
**/
var player2card1 = document.getElementById('player2card1');
var contextofplayer2card1 = player2card1.getContext('2d');
var imageObjp2c1 = new Image();
contextofplayer2card1.globalAlpha = 0.9;


var player2card2 = document.getElementById('player2card2');
var contextofplayer2card2 = player2card2.getContext('2d');
var imageObjp2c2 = new Image();
contextofplayer2card2.globalAlpha = 1;


var player2card3 = document.getElementById('player2card3');
var contextofplayer2card3 = player2card3.getContext('2d');
var imageObjp2c3 = new Image();
contextofplayer2card3.globalAlpha = 1;

var player2card4 = document.getElementById('player2card4');
var contextofplayer2card4 = player2card4.getContext('2d');
var imageObjp2c4 = new Image();
contextofplayer2card4.globalAlpha = 1;

var player2card5 = document.getElementById('player2card5');
var contextofplayer2card5 = player2card5.getContext('2d');
var imageObjp2c5 = new Image();
contextofplayer2card5.globalAlpha = 1;


var player2card6 = document.getElementById('player2card6');
var contextofplayer2card6 = player2card6.getContext('2d');
var imageObjp2c6 = new Image();
contextofplayer2card6.globalAlpha = 1;

var player2card7 = document.getElementById('player2card7');
var contextofplayer2card7 = player2card7.getContext('2d');
var imageObjp2c7 = new Image();
contextofplayer2card7.globalAlpha = 1;


var player2card8 = document.getElementById('player2card8');
var contextofplayer2card8 = player2card8.getContext('2d');
var imageObjp2c8 = new Image();
contextofplayer2card8.globalAlpha = 1;


var player2card9 = document.getElementById('player2card9');
var contextofplayer2card9 = player2card9.getContext('2d');
var imageObjp2c9 = new Image();
contextofplayer2card9.globalAlpha = 1;


var player2card10 = document.getElementById('player2card10');
var contextofplayer2card10 = player2card10.getContext('2d');
var imageObjp2c10 = new Image();
contextofplayer2card10.globalAlpha = 1;

var player2card11 = document.getElementById('player2card11');
var contextofplayer2card11 = player2card11.getContext('2d');
var imageObjp2c11 = new Image();
contextofplayer2card11.globalAlpha = 1;
/**
Import of canvas elements of player2  from 'index.html' file ends 
**/




/***
Import canvas element for showing dealer cards
**/
var dealercard1 = document.getElementById('dealercard1');
var contextofdealercard1 = dealercard1.getContext('2d');
var imageObjdealerc1 = new Image();
contextofdealercard1.globalAlpha = 1;


var dealercard2 = document.getElementById('dealercard2');
var contextofdealercard2 = dealercard2.getContext('2d');
var imageObjdealerc2 = new Image();
contextofdealercard2.globalAlpha = 1;


var dealercard3 = document.getElementById('dealercard3');
var contextofdealercard3 = dealercard3.getContext('2d');
var imageObjdealerc3 = new Image();
contextofdealercard3.globalAlpha = 1;

var dealercard4 = document.getElementById('dealercard4');
var contextofdealercard4 = dealercard4.getContext('2d');
var imageObjdealerc4 = new Image();
contextofdealercard4.globalAlpha = 1;

var dealercard5 = document.getElementById('dealercard5');
var contextofdealercard5 = dealercard5.getContext('2d');
var imageObjdealerc5 = new Image();
contextofdealercard5.globalAlpha = 1;


var dealercard6 = document.getElementById('dealercard6');
var contextofdealercard6 = dealercard6.getContext('2d');
var imageObjdealerc6 = new Image();
contextofdealercard6.globalAlpha = 1;

var dealercard7 = document.getElementById('dealercard7');
var contextofdealercard7 = dealercard7.getContext('2d');
var imageObjdealerc7 = new Image();
contextofdealercard7.globalAlpha = 1;


var dealercard8 = document.getElementById('dealercard8');
var contextofdealercard8 = dealercard8.getContext('2d');
var imageObjdealerc8 = new Image();
contextofdealercard8.globalAlpha = 1;


var dealercard9 = document.getElementById('dealercard9');
var contextofdealercard9 = dealercard9.getContext('2d');
var imageObjdealerc9 = new Image();
contextofdealercard9.globalAlpha = 1;


var dealercard10 = document.getElementById('dealercard10');
var contextofdealercard10 = dealercard10.getContext('2d');
var imageObjdealerc10 = new Image();
contextofdealercard10.globalAlpha = 1;


var dealercard11 = document.getElementById('dealercard11');
var contextofdealercard11 = dealercard11.getContext('2d');
var imageObjdealerc11 = new Image();
contextofdealercard11.globalAlpha = 1;


var showhiddencard = document.getElementById('showhiddencard');
var contextofshowhiddencard = showhiddencard.getContext('2d');
var imageObjshowhiddencard= new Image();
contextofshowhiddencard.globalAlpha = 1;







//////////****************************************************
//////////****************************************************
//////////****************************************************
//////////****************************************************

/**
Card Constructor Starts
**/
function Card(n, isindeck,x,y){
  //Note : n is a number from 1 to 52,
  //it's not a number 1 through 13.   

  var number = n;
  
  //isindeck is the property of a card 
  //used to check if the card is still in 
  //the deck or not. 
  this.isindeck = isindeck;




  //properties for image starts
  this.sourceX = x;
  this.sourceY = y;

  this.sourceWidth = 80;
  this.sourceHeight = 120;

  this.destWidth = 80;
  this.destHeight = 120;
  //properties for image ends




  //This method is used only for displaying which 
  //card a user(player or dealer) has in console 
  this.getNumber = function(){
      //since there are  only numbers from 1 to 13 in actual
      //card, divide the random number you get from the array 
      //by 13, to get the actual card number. 
      var actualCard = number % 13; //v imp pass the remainder

      if (actualCard === 11)
      {
        return "Jack";
      }
      else if (actualCard === 12)
      {
        return "Queen";
      }
      else if (actualCard === 0)
      {
        return "King";
      }
      else if (actualCard === 1)
      {
        return "Ace";
      }
      else
      {
        return actualCard;
      }   
  };




  //for this game I have considered that there
  //are 52 cards in a deck and the first 13 cards
  //are of spade, second 13 are of heart, third 
  //13 are of club and the last remaining 13 cards
  //are of diamon. Please look at the sprite file 
  //named 'deck.png' which is inside images folder. 
  //It will make more sense. 
  this.getSuit = function(){    
      if(number < 14 )
      {
        return "Spade";  
      }
      else if( number < 27 )
      {
        return "Heart";
      }
      else if( number < 40 )
      {
        return "Club";
      }
      else
      {
        return "Diamond";
      }
  };



  //This method gives a value to a card for playing 
  //Black Jack. These values are Black Jack card values
  //and not the values that are seen on the card. 
  //If a user has face card, then the value of the 
  //card is set to be 10. 
  //If a player has an ace card, then it's given a
  //default value of 11. 

  this.getValue = function(){
    var actualCard = number % 13; 
      if(actualCard >= 10 || actualCard === 0  ) //face cards
      {
          return 10;
      }
      else if(actualCard === 1) //Powered up Ace
      {
          return 11;
      }
      else
      {     
          return actualCard;
      }          
  };
      
}
/**
Card Constructor Ends
**/




/**
Create 52 Cards with card number (param 1 of Card Constructor),
status of the card set to 'true' in the deck (param 2 of Card Constructor) 
i.e. make all the cards as available in deck by default at the beginning,
pass x(left top's x value of the card in sprite) and y(left top's y value 
of the card in sprite). The sprite file used for this game is located in 
images folder. The name of the sprite file for cards is named 'deck.png'. 
**/
//Create an array of 52 cards(object with propertis set)
var cards = new Array();

var width = 80;
for(var i=0; i<52; i++)
{
  if(i<13) //first row, first 13 cards , see sprite image named 'deck.png'
  {
    x = i * width;
    y = 0;
    cards[i] = new Card(i+1,true, x, y); 
  }
  else if(i<26) //second row, second 13 cards
  {
    x = (i-13) * width;
    y = 120;
    cards[i] = new Card(i+1,true, x, y); 
  }
  else if(i<39) //third row, third 13 cards
  {
    x = (i-26) * width;
    y = 240;
    cards[i] = new Card(i+1,true, x, y); 
  }
  else //fourth row, remaining 13 cards
  {
    x = (i-39) * width;
    y = 360;
    cards[i] = new Card(i+1,true, x, y); 
  }
}
/**
Creating 52 cards(object with properties ends)
**/




/**
Deal Function Starts
**/
//Deal function creates/returns only one card
// that is currently in deck. This function makes
//sure that the card passe out to a player is unique
var deal = function(){ 
   for(var i=0; i<cards.length; i++)
   {
      //If the card is in the deck, then give it to
      //a customer and set indeck to false, else move
      //to another one.
      //Remember you need to shuffle only when the game starts      
        if(cards[i].isindeck){          
           cards[i].isindeck = false;
           return cards[i]; //return a card object, this is like
                            //passing the card on the top of the 
                            //deck to a player/dealer if the card
                            //is available
        }//if ends
   }   
   
};
/**
Deal Function Ends
**/



/**
Hand Constuctor: This constructor is used to create a user 
who is given 2 cards at the beginning of the game once the 
user puts a minimum bet and hits deal button.

Note: Dealer does not have to put the minimum bet. 
**/
function Hand(){
   //Create an empty array for holding cards of player/dealer
   var array =[]; 
   //store 2 unique cards/objects at the beginning in the array
   array[0] = deal();
   array[1] = deal();
   
   //getHand method returns an array of cards/object
   this.getHand = function(){       
           return array;        
   };

   //score method calculate the most suitable score for a 
   //given hand. It can handle multiple aces.    
   this.score = function(){
       var totalScore = 0;

         //count total number of aces
         var totalnumofaces =0;
        for(var i=0; i<array.length; i++)
        {
          if(array[i].getValue() === 11)
          {
            totalnumofaces +=1;
          }       
        }
      

      //add card values 
       for(var i=0; i< array.length; i++)
       {
         totalScore += array[i].getValue();
         //do the following calculations after
         //if total score is greater than 21 
         //scan the entrie array for ace and decrease the 
         //value on by one
         if(totalScore > 21 && totalnumofaces>0) 
         {
            totalScore -=10;
            totalnumofaces -=1;
         }//end main if
       }//end main for
       return totalScore; 
   };
   //score method ends



   //printHand method displas all the cards with actual card number
   //and the suit of a hand
   this.printHand = function(){
       var yourHand = " ";
       for(var i=0; i< array.length; i++){
        //printing string, so we are concatenating, your hand is simply a string, not an array or object
           yourHand += array[i].getNumber() + " of " + array[i].getSuit() + ", ";
       }
       return yourHand;
   };
   //printHand method ends

   
   //hitMe, this method adds a card to a calling hand/player/dealer
   this.hitMe = function(){
        array[array.length]=deal();   
   };
   //hitMe method ends
}
/**
Hand Constructor ends
**/


/**
Funtion for creating a dealer
**/
var playAsDealer = function (){
   var mydealer = new Hand(); //give two cards to the dealer at the beginning   
   mydealer.printHand();
   return mydealer;
};
/**
Funtion for creating a ends
**/



/**
Funtion for creating a user/player ends.
Use this function to create multiple users. 
**/
var playAsUser = function (){
   var myhand = new Hand();
  return myhand;
};



/**
Use this function for comparing score of a player with
a dealer at any time and declaring winner, looser. 
**/
var declareWinner = function( userHand, dealerHand){
   var userScore = userHand.score();
   var dealerScore = dealerHand.score();
   
   if(userScore >21)
   {
       if(dealerScore >21){
          gameOver = true;
          return "You tied!";
       }
       else
       {
          gameOver = true;
          return "You lose!";
       }
           
   }
   else if (dealerScore > 21)
   {
        gameOver = true;
       return "You win!";
   }
   else if (userScore > dealerScore)
   {
      gameOver = true;
       return "You win!";
   }
   else if (userScore === dealerScore)
   {
       gameOver = true;
       return "You tied!";   
   }
   else    
   {
       gameOver = true;
       return "You lose!";  
   }
   console.log('hi');
};
/**
Who won function ends
*/

/**
Update Balance
**/
var balanceUpdate = function(msg){
  var winMessage = msg;
  if(winMessage == "You win!")
  {
    p2balance += p2bet;
    document.getElementById("p2balance").innerHTML= p2balance; 
    console.log("Your new balance is: " + p2balance);

  }
  else if(winMessage == "You lose!")
  {
    p2balance -= p2bet;
    document.getElementById("p2balance").innerHTML= p2balance; 
    console.log("Your new balance is: " + p2balance);

  }
  else if(winMessage == "You tied!")//"You tied!"
  {
    p2balance += 0;
    document.getElementById("p2balance").innerHTML= p2balance; 
    console.log("Your new balance is: " + p2balance);

  }
  else
  {
    document.getElementById("p2balance").innerHTML= p2balance; 
    console.log("Unknown error occured!");
  }
};
/**
Update Balance function ends
**/





/**
Clean Table function
**/
var cleanTable = function() {
  //clear canvas and reset the drawing area
  contextofplayer2card1.clearRect(0, 0, gameWidth, gameHeight);

  

  
  player2card1 = document.getElementById('player2card1');
  contextofplayer2card1 = player2card1.getContext('2d');
  imageObjp2c1 = new Image();
  contextofplayer2card1.globalAlpha = 0.9;




  //reset variables
  player2clickeddealbtn = false;
  showdealersecondcardwithfrontup = false;
  gameOver =false;

  console.log(me);
};
/**
Clean Table function ends
**/





/**
Update Minimum Bet
**/
var getp2minimumbet = function(){
  if(p2chip1.checkClicked()) 
  {
     p2bet +=1;
     document.getElementById("p2bet").innerHTML= p2bet; 
  }

  if(p2chip5.checkClicked())
  { 
    p2bet +=5;
    document.getElementById("p2bet").innerHTML= p2bet; 
  }

  if(p2chip25.checkClicked())
  {
    p2bet +=25;
    document.getElementById("p2bet").innerHTML= p2bet; 
  }

  if(p2chip100.checkClicked())
  { 
    p2bet +=100;
    document.getElementById("p2bet").innerHTML= p2bet; 
  }
};
/**
Update Minimum Bet
**/


/**
Display dealer hidden card function starts.
**/
var flipdealerhiddencard = function(){
      console.log('i am in!');
      p2clicksstndbtnbefore21 = true; //use this value in dealer function 
      var dealerallcards = dealer.getHand(); 
      var dealercardnum2 = dealerallcards[1]; //
      var x2 = dealercardnum2.sourceX;
      var y2 = dealercardnum2.sourceY;


      /*Dealer hidden card*/
      imageObjshowhiddencard.onload = function() {
      // draw cropped image
      var sourceX = x2; // from object
      var sourceY = y2; // from object 
      var destX = 282; //problem
      var destY = 5; //problem

      contextofplayer2card1.drawImage(imageObjshowhiddencard, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
      };
      imageObjshowhiddencard.src = 'images/deck.png';
};

/**
Display dealer hidden card function ends.
**/











/**
When a computer user clicks on the deal button, call this function
to  create a player(player2 for now ) and a dealer. 
**/
var playGame = function(cards){


    //*****************shuffle cards   
    var theLength = cards.length - 1;
    var toSwap; // The index we will swap  (i.e. the random number)
    var temp; // A temporary variable to hold reference to index variable i points to
    for (i = theLength; i > 0; i--) { 
        toSwap = Math.floor(Math.random() * i);
        temp = cards[i];
        cards[i] = cards[toSwap];
        cards[toSwap] = temp;
    }
    //******************shuffle cards ends



   me = playAsUser(); //create the first player. I have considered 
                      //me as player2. Player1 still needs to be created.  
   dealer = playAsDealer(); //return hand
   
  
   console.log("Initially Dealer has " + dealer.printHand() + "totalScore: " + dealer.score());
   console.log("\n");
   console.log("Initially Player2 has " + me.printHand() + "totalScore: " + me.score());   

};



//////////****************************************************
//////////****************************************************
//////////****************************************************
//////////****************************************************

/**
  Mouse click event starts
**/
var mouseX = 0;
var mouseY =0;

//when a user clicks, call 'mouseClicked' function
document.addEventListener('click', mouseClicked, false);
document.getElementById("p2balance").innerHTML= p2balance;


//Constructor for creating buttons in an image
function Button(xL, xR, yT, yB){
  this.xLeft = xL;
  this.xRight = xR;
  this.yTop = yT;
  this.yBottom = yB;
}


//Create buttons in the canvas
//max widht of each button is 50px, so use 40px as the width
var dealbtnPlayer2 = new Button(745,765,410,440);
var hitbtnPlayer2  = new Button(610,650,410,440);
var standbtnPlayer2  = new Button(680,720,410,440);


var p2chip1  = new Button(610,640,360,390);
var p2chip5  = new Button(660,690,360,390);
var p2chip25 = new Button(700,730,360,390);
var p2chip100 = new Button(750,780,360,390);



//method, not function for Button constructor
Button.prototype.checkClicked = function(){
  if(this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <=this.yBottom) return true;
}

//Mouse click event. What to do when a user clicks on certain area of the canvas



/**
Mouse click event function starts
**/

function mouseClicked(e){
  mouseX = e.pageX - canvasBg.offsetLeft;
  mouseY = e.pageY - canvasBg.offsetTop;




  getp2minimumbet();





  if(p2bet>=5 && p2bet <=500)
  {
    console.log("Your bet is ok: " + p2bet);
           //if you are clicking the deal button for the first time, 
    //then execut the following if statment (If you have not
    //already clicked the deal button)
    if(dealbtnPlayer2.checkClicked() && !player2clickeddealbtn)
    {
      //once the deal button has been clicked, set that it has been clicked
      player2clickeddealbtn = true;
      console.log("Game starts!");
      playGame(cards); //cards is the array which is shuffled       
    }

    if(!me && (hitbtnPlayer2.checkClicked() || standbtnPlayer2.checkClicked()))
    {
      alert('Hit deal button first!');
    }


    if(me) //check if you have a hand
    {   //check if the deal button has already been pressed, then only allow users to hit other buttons
        //display only 2 cards at the beginning of gameplay
        displayPlayer2cards();
        displayfirst2cardsonehiddenofdealer(); //for making sure that the cards are not drawn again and again

        //Part I -Early checking, if a user has black jack in the first hand
        if( me.score() >= 21 ) 
        {
          showdealersecondcardwithfrontup = true;
              //console.log('I am in where score of user is >=21 ');
              winMessage = declareWinner(me, dealer);
              console.log("Winner : " + winMessage);
              flipdealerhiddencard();
              balanceUpdate(winMessage);
        }



        //if the player2 has already clicked the deal button(var) not function call, then only allow 
        //them to click stand and hit buttons
        if(player2clickeddealbtn && !gameOver)
        {
                //add a card to the players hand if he/she hits the "Hit" button
                console.log("length of me is: "+me.length);
                if(hitbtnPlayer2.checkClicked())
                {    
                  me.hitMe();
                  console.log("Player2 has " + me.printHand() + "totalScore: " + me.score());
                  displayPlayer2cards();
                }

                //Part II - If a user cicks on hit button and score is above 21 or equals to 21
                  if( (me.score() >= 21) && (hitbtnPlayer2.checkClicked())  ) 
                  {
                        showdealersecondcardwithfrontup = true;
                        //console.log('I am in where score of user is >=21 ');
                        flipdealerhiddencard();
                        while(dealer.score() < 17)
                        {
                          dealer.hitMe();         
                        }
                        winMessage = declareWinner(me, dealer);
                        console.log("Dealer has new" + dealer.printHand() + "totalScore: " + dealer.score());
                        console.log("Winner : " + winMessage);
                        //now display remaining cards of dealer
                        displaydealercards();
                        balanceUpdate(winMessage);
                        alert(winMessage);
                  }


                //If the user hits the stand button <<any time!!>> flip the hidden card first, then compare scores
                if(standbtnPlayer2.checkClicked()) //once a player hits stand button, there is no need to //display any cards of the player
                { 
                        flipdealerhiddencard();

                        while(dealer.score() < 17)
                        {
                          dealer.hitMe();         
                        }
                              

                        console.log("Dealer has " + dealer.printHand() + "totalScore: " + dealer.score());
                        winMessage = declareWinner(me,dealer);
                        console.log("Winner : " + winMessage);
                        displaydealercards();
                        balanceUpdate(winMessage);
                        alert(winMessage);
                } //if a user clicks on stand button ends
        }
        else{
          console.log("Hit the deal button first, to play the game!");
        }
    }//checking whether a user exist or not ends, else part is not required


  }// if part of bet checking ends 
  else 
  {
    console.log('Your current bet is: ' + p2bet);    
    console.log('Please set minimum bet of 5$ or a max of 500$');
    alert('Please set minimum bet of 5$ or a max of 500$');
  }

}//mouseClicked function ends










/**********************************************************
Display Player2 Cards Function Starts                      *
**********************************************************/
var displayPlayer2cards = function (){
  var player2allcards = me.getHand(); 

if(player2allcards.length === 2)
{

var player2cardnum1 = player2allcards[0]; //
var x1 = player2cardnum1.sourceX;
var y1 = player2cardnum1.sourceY;


/*Player 2 card num 1*/
 imageObjp2c1.onload = function() {
    // draw cropped image
  var sourceX = x1; // from object
  var sourceY = y1; // from object 
  var destX = 495; //problem
  var destY = 225; //problem

  //contextofplayer2card1 is very very important, draw all cards here

  contextofplayer2card1.drawImage(imageObjp2c1, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
};
imageObjp2c1.src = 'images/deck.png';




  var player2cardnum2 = player2allcards[1]; //
var x2 = player2cardnum2.sourceX;
var y2 = player2cardnum2.sourceY;


/*Player 2 card num 2*/
 imageObjp2c2.onload = function() {
    // draw cropped image
  var sourceX = x2; // from object
  var sourceY = y2; // from object 
  var destX = 575; //problem
  var destY = 225; //problem

  contextofplayer2card1.drawImage(imageObjp2c2, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
};
imageObjp2c2.src = 'images/deck.png';
}




  if(player2allcards.length === 3){
    var player2cardnum3 = player2allcards[2]; //
    var x3 = player2cardnum3.sourceX;
    var y3 = player2cardnum3.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c3.onload = function() {
      // draw cropped image
    var sourceX = x3; // from object
    var sourceY = y3; // from object 
    var destX = 590; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c3, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c3.src = 'images/deck.png';
  }


  if(player2allcards.length === 4){ 
    var player2cardnum4 = player2allcards[3]; //
    var x4 = player2cardnum4.sourceX;
    var y4 = player2cardnum4.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c4.onload = function() {
      // draw cropped image
    var sourceX = x4; // from object
    var sourceY = y4; // from object 
    var destX = 605; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c4, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c4.src = 'images/deck.png';
  }

  if(player2allcards.length === 5){ 
    var player2cardnum5 = player2allcards[4]; //
    var x5 = player2cardnum5.sourceX;
    var y5 = player2cardnum5.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c5.onload = function() {
      // draw cropped image
    var sourceX = x5; // from object
    var sourceY = y5; // from object 
    var destX = 620; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c5, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c5.src = 'images/deck.png';
  }


  if(player2allcards.length === 6){ 
    var player2cardnum6 = player2allcards[5]; //
    var x6 = player2cardnum6.sourceX;
    var y6 = player2cardnum6.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c6.onload = function() {
      // draw cropped image
    var sourceX = x6; // from object
    var sourceY = y6; // from object 
    var destX = 635; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c6, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c6.src = 'images/deck.png';
  }


  if(player2allcards.length === 7){ 
    var player2cardnum7 = player2allcards[6]; //
    var x7 = player2cardnum7.sourceX;
    var y7 = player2cardnum7.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c7.onload = function() {
      // draw cropped image
    var sourceX = x7; // from object
    var sourceY = y7; // from object 
    var destX = 650; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c7, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c7.src = 'images/deck.png';
  }


  if(player2allcards.length === 8){ 
    var player2cardnum8 = player2allcards[7]; //
    var x8 = player2cardnum8.sourceX;
    var y8 = player2cardnum8.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c8.onload = function() {
      // draw cropped image
    var sourceX = x8; // from object
    var sourceY = y8; // from object 
    var destX = 665; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c8, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c8.src = 'images/deck.png';
  }



  if(player2allcards.length === 9){ 
    var player2cardnum9 = player2allcards[8]; //
    var x9 = player2cardnum9.sourceX;
    var y9 = player2cardnum9.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c9.onload = function() {
      // draw cropped image
    var sourceX = x9; // from object
    var sourceY = y9; // from object 
    var destX = 680; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c9, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c9.src = 'images/deck.png';
  }

  if(player2allcards.length === 10){ 
    var player2cardnum10 = player2allcards[9]; //
    var x10 = player2cardnum10.sourceX;
    var y10 = player2cardnum10.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c10.onload = function() {
      // draw cropped image
    var sourceX = x10; // from object
    var sourceY = y10; // from object 
    var destX = 695; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c10, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c10.src = 'images/deck.png';
  }



  if(player2allcards.length === 11){ 
    var player2cardnum10 = player2allcards[10]; //
    var x11 = player2cardnum11.sourceX;
    var y11 = player2cardnum11.sourceY;

    /*Player 2 card num 2*/
   imageObjp2c11.onload = function() {
      // draw cropped image
    var sourceX = x11; // from object
    var sourceY = y11; // from object 
    var destX = 710; //problem
    var destY = 225; //problem

    contextofplayer2card1.drawImage(imageObjp2c11, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjp2c11.src = 'images/deck.png';
  }

}




//////////****************************************************
//////////****************************************************
//////////****************************************************
//////////****************************************************
/**********************************************************
Display Dealer Cards Function Starts                      *
**********************************************************/



var displayfirst2cardsonehiddenofdealer = function(){
  var dealerallcards = dealer.getHand(); 


//Note: since 2 cards are already displayed at the beginning 
//so no need to add extra code

  var dealercardnum1 = dealerallcards[0]; //
  var x1 = dealercardnum1.sourceX;
  var y1 = dealercardnum1.sourceY;


  /*Player 2 card num 2*/
   imageObjdealerc1.onload = function() {
      // draw cropped image
    var sourceX = x1; // from object
    var sourceY = y1; // from object 
    var destX = 200; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc1, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc1.src = 'images/deck.png';



  var dealercardnum2 = dealerallcards[1]; //
  var x2 = dealercardnum2.sourceX;
  var y2 = dealercardnum2.sourceY;


  /*Player 2 card num 2*/
   imageObjdealerc2.onload = function() {
      // draw cropped image
    var sourceX = 0; // from object
    var sourceY = 480; // from object 
    var destX = 282; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc2, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc2.src = 'images/deck.png';
}

















var displaydealercards = function (){

var dealerallcards = dealer.getHand(); 


var dealershowall3cards = function(){
    var dealercardnum3 = dealerallcards[2]; //
    var x3 = dealercardnum3.sourceX;
    var y3 = dealercardnum3.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc3.onload = function() {
      // draw cropped image
    var sourceX = x3; // from object
    var sourceY = y3; // from object 
    var destX = 364; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc3, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc3.src = 'images/deck.png';   
};



var dealershowall4cards = function(){
    var dealercardnum4 = dealerallcards[3]; //
    var x4 = dealercardnum4.sourceX;
    var y4 = dealercardnum4.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc4.onload = function() {
      // draw cropped image
    var sourceX = x4; // from object
    var sourceY = y4; // from object 
    var destX = 446; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc4, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc4.src = 'images/deck.png';
};


var dealershowall5cards = function(){
    var dealercardnum5 = dealerallcards[4]; //
    var x5 = dealercardnum5.sourceX;
    var y5 = dealercardnum5.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc5.onload = function() {
      // draw cropped image
    var sourceX = x5; // from object
    var sourceY = y5; // from object 
    var destX = 528; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc5, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc5.src = 'images/deck.png';      
};

var dealershowall6cards = function(){
    var dealercardnum6 = dealerallcards[5]; //
    var x6 = dealercardnum6.sourceX;
    var y6 = dealercardnum6.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc6.onload = function() {
      // draw cropped image
    var sourceX = x6; // from object
    var sourceY = y6; // from object 
    var destX = 610; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc6, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc6.src = 'images/deck.png';  
};

var dealershowall7cards = function(){
    var dealercardnum7 = dealerallcards[6]; //
    var x7 = dealercardnum7.sourceX;
    var y7 = dealercardnum7.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc7.onload = function() {
      // draw cropped image
    var sourceX = x7; // from object
    var sourceY = y7; // from object 
    var destX = 692; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc7, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc7.src = 'images/deck.png';
};

var dealershowall8cards = function(){
    var dealercardnum8 = dealerallcards[7]; //
    var x8 = dealercardnum8.sourceX;
    var y8 = dealercardnum8.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc8.onload = function() {
      // draw cropped image
    var sourceX = x8; // from object
    var sourceY = y8; // from object 
    var destX = 775; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc8, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc8.src = 'images/deck.png';  
};

var dealershowall9cards = function(){
    var dealercardnum9 = dealerallcards[8]; //
    var x9 = dealercardnum9.sourceX;
    var y9 = dealercardnum9.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc9.onload = function() {
      // draw cropped image
    var sourceX = x9; // from object
    var sourceY = y9; // from object 
    var destX = 785; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc9, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc9.src = 'images/deck.png';      
};

var dealershowall10cards = function(){
    var dealercardnum10 = dealerallcards[9]; //
    var x10 = dealercardnum10.sourceX;
    var y10 = dealercardnum10.sourceY;

    /*Player 2 card num 2*/
   imageObjdealerc10.onload = function() {
      // draw cropped image
    var sourceX = x10; // from object
    var sourceY = y10; // from object 
    var destX = 795; //problem
    var destY = 5; //problem

    contextofplayer2card1.drawImage(imageObjdealerc10, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);  
  };
  imageObjdealerc10.src = 'images/deck.png';
};



  if(dealerallcards.length === 3){
    dealershowall3cards();
  }


  if(dealerallcards.length === 4){
    dealershowall3cards(); 
    dealershowall4cards();
  }


  if(dealerallcards.length === 5){
    dealershowall3cards(); 
    dealershowall4cards();
    dealershowall5cards();
  }


  if(dealerallcards.length === 6){
    dealershowall3cards(); 
    dealershowall4cards();
    dealershowall5cards();
    dealershowall6cards();
  }



  if(dealerallcards.length === 7){
    dealershowall3cards(); 
    dealershowall4cards();
    dealershowall5cards();
    dealershowall6cards();
    dealershowall7cards();
  }





  if(dealerallcards.length === 8){
    dealershowall3cards(); 
    dealershowall4cards();
    dealershowall5cards();
    dealershowall6cards();
    dealershowall7cards();
    dealershowall8cards();
  }




  if(dealerallcards.length === 9){
    dealershowall3cards(); 
    dealershowall4cards();
    dealershowall5cards();
    dealershowall6cards();
    dealershowall7cards();
    dealershowall8cards();
    dealershowall9cards();
  }





  if(dealerallcards.length === 10){
    dealershowall3cards(); 
    dealershowall4cards();
    dealershowall5cards();
    dealershowall6cards();
    dealershowall7cards();
    dealershowall8cards();
    dealershowall9cards();
    dealershowall10cards();
  }

  if(dealerallcards.length === 10){
    dealershowall3cards(); 
    dealershowall4cards();
    dealershowall5cards();
    dealershowall6cards();
    dealershowall7cards();
    dealershowall8cards();
    dealershowall9cards();
    dealershowall10cards();
    dealershowall11cards();
  }




}//dealer image display function ends



