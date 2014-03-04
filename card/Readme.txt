<!--  Please read this first for running the game!

Since the programming part is entirely written on javascript, 
please enable javascript in your browser.!

Running the program in Google Chrome
Please use Google Chrome to test the single user game
with the console running. I have not written code for
the player on the left hand side. Please use buttons
that are on the right hand side of the game. 

 
Running the program in Google Chrome 
To run the game in Google Chrome follow these steps:
a. Open the index.html file of the game in 'Google Chrome'
b. Rt. click anywhere on the screen and click on the option
   'Inspect Element'
c. Then click on 'Console' tab. Now start using buttons 
   on the Black Jack Desk.
d. I have not written code for the player on the left hand
   side. Please use buttons that are on the right hand side 
   of the game. 
   Place a minimum bet and start playing the game. 
   All the cards provided to the dealer and the player2,
   score and other additional detail like who won or lost
   are updated in console as the game progresses.
e. Once a game completes just click on restart, as you can 
   see that once the game is over it won't let you click 
   any buttons expect the chips.   
   I have not developed balance of player properly yet.  
   
Running the program in Firefox
a. If you don't have Google Chrome, install the addon "Firebug"
   for Firefox. 
b. Rt click anywhere on the game screen, click on 
   "Inspect element with Firebug".
c. Click on "Console tab".
d. Select bet ad click on deal. Then hit deal or stand. 
e. Once a game completes just click on restart, as you can 
   see that once the game is over it won't let you click 
   any buttons expect the chips.   
   I have not developed balance of player properly yet.   




   Bug:
   1) Both dealer and a player can handle 10 cards at most
   without getting their individual total score over 21. 
   Four Aces total = 4
   Four num 2 cards total =  8
   Three num 3 cards total = 6
                       Total score: 18
   _______________________
       Total num of cards used = Four + Four + Three = 11

   Whenever the browser draws more than one card at a time
   for the dealer, some pictures overlap. This is one bug
   that needs to be fixed. 

   2) Dealer hidden card number is displayed in console.
   The card number (not a Black Jack value) of first two 
   dealer cards are shown in console, this is just for 
   my reference. Second card in the interface remains hidden. 
   Do not cheat!

   3)Balance function is not complete!
   
   


<<<<<Files and folder Structure >>>
1.index.html - open this file to play game with console enabled in Google chrome
  or Firefox
2. CSS folder contains a css files related to this project. 
3. images folder contains background with ruler, picture of table for black jack
   and a sprite 
   image of all cards
4. js folder contains javascript files, black-jack.js contains main program 
   jquery-1.11.0.min.js is just a library 
5. sample-output contains the latest screen-shots of the game
6. Black-Jack-Simulation-Flow-Chart-pdf file contains game design. 
7. Rules.txt file contains rules    


For further info contact me at 
nijjwal.shrestha@gmail.com
-->
