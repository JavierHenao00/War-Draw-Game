
let deckid
const btn_new_deck=document.getElementById("new-deck")
const btn_draw_card=document.getElementById("draw-cards")
const remaining_card= document.getElementById("remaining-cards")
const cards = document.getElementById("image-cards")
const computer_score = document.getElementById("computer-score")
const me_score = document.getElementById("me-score")
const title_header = document.getElementById("title-header")
let isNewDeckClicked =  false;
let me_iterator = 0
let computer_iterator=0



function showDeck(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/`)
    .then(res=>res.json())
    .then(data=>{
        deckid = data.deck_id
        
       isNewDeckClicked=true
       
    
    })
}


btn_new_deck.addEventListener('click',showDeck)
btn_draw_card.addEventListener("click",()=>{

if(!isNewDeckClicked){
    
    
    alert("You must to click  on 'Shuffle deck' button first");
}else{
    
    
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckid}/draw/?count=2`)
        .then(res => res.json())
        .then(data=>{
            
            console.log(data);
                 
           
            remaining_card.textContent= `${data.remaining}`;

                    cards.children[0].innerHTML=`
                    <img class="cards" src=${data.cards[0].image} alt="image card">`

                    
                    cards.children[1].innerHTML=`
                    <img class="cards" src=${data.cards[1].image} alt="image card">`

                    

                    const card1 = data.cards[0].value;
                    const card2 = data.cards[1].value;

                    cardWinner(card1,card2)

                    const indexCard1=cardWinner(card1,card2)
                    const indexCard2=cardWinner(card1,card2)

                    const firstCard = indexCard1[0];
                    const secondCard = indexCard2[1]; 
 
                    
                    if(firstCard>secondCard){

                        computer_iterator++
                        computer_score.innerHTML="&nbsp;"+computer_iterator
                        title_header.textContent="COMPUTER WIN!!"
                        
                        
                    }else if(secondCard>firstCard){
                       me_iterator++
                       me_score.innerHTML="&nbsp;"+me_iterator
                       title_header.textContent="YOU WIN!!"
                    }else {
                        title_header.textContent="WAR!!"
                    }

                    
                    if (data.remaining===0) {
                        btn_draw_card.disabled=true
                        
                        if(computer_iterator>me_iterator){
                            title_header.textContent="YOU LOSE!! TRY AGAIN😢"
                        }else if(me_iterator>computer_iterator){
                            title_header.textContent="CONGRATULATION!! YOU WIN 🥳"
                        }else{
                            title_header.textContent="IT'S A TIE 🤖VS👦"
                        }
                    } 
                    
                    // whoWin(data)
                })
            
                
}


})

function cardWinner(card1,card2){

    const ValueOptions= ["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"]

    const ValueCard1 = ValueOptions.indexOf(card1);
    const ValueCard2 = ValueOptions.indexOf(card2);
    
    return [ValueCard1,ValueCard2]
}

// function whoWin(object){
    
//         const card1 = object.cards[0].value
//         const card2 = object.cards[1].value
       
        
//         if(card1>card2){
//             console.log(card1+" Is the winner")
//                 }
//                 else if (card2>card1){
//                     console.log(card2+"Is the winner");
//                 }
//                 else if (card1===card2) {
//                     console.log(card1+card2+"It's a tie!"); 
//                     }            
//                     else if(card1==='JACK'&&card2==='QUEEN'){
//                         console.log(card2+"QUEEN Is the Winner");
//                     }else if (card1.value==='QUEEN'&&card2.value==='JACK') {
//                         console.log(card1+"QUEEN Is the Winner");
//                     }
                        
//                         else if(card1==='KING'&&card2==='ACE'){
//                             console.log(card2+"ACE Is the Winner");
//                         }else if (card1.value==='ACE'&&card2.value==='KING') {
//                             console.log(card1+"ACE Is the Winner");
//                         }

//                             else if(card1==='JACK'&&card2==='KING'){
//                                 console.log(card2+"KING Is the Winner");
//                             }else if (card1.value==='KING'&&card2.value==='JACK') {
//                                 console.log(card1+"KING Is the Winner");
//                             }

//                                 else if(card1==='QUEEN'&&card2==='ACE'){
//                                     console.log(card2+"ACE Is the Winner");
//                                 }else if (card1.value==='ACE'&&card2.value==='QUEEN') {
//                                     console.log(card1+"ACE Is the Winner");
//                                 }

//                                     else if(card1==='JACK'&&card2==='ACE'){
//                                         console.log(card2+"ACE Is the Winner");
//                                     }else if (card1==='ACE'&&card2==='JACK') {
//                                         console.log(card1+"ACE Is the Winner");
//                                     }

//                                         else if(card1==='QUEEN'&&card2==='KING'){
//                                             console.log(card2+"KING Is the Winner");
//                                         }else if (card1==='KING'&&card2==='QUEEN') {
//                                             console.log(card1+"KING Is the Winner");
//                                         }
//         }
           
            
       
        
       
      
     







// https://apis.scrimba.com/deckofcards/api/deck/${deckid}/draw/?count=2