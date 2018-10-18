/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var dice,activeplayer,statevar;
init();
function init(){
  statevar=true;
  activeplayer=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#score-0').textContent=0;
  document.querySelector('#score-1').textContent=0;
  document.querySelector('#name-0').textContent='Player-1';
  document.querySelector('#name-1').textContent='Player-2';
}
document.querySelector('.btn-new').addEventListener('click',init);
function roll(){
  if(statevar){
    dice=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').src='dice-'+dice+'.png';
    var element=document.querySelector('#current-' + activeplayer);
    if(dice!=1){
      var a =element.textContent;
      element.textContent=Number(a)+dice;
    }
    else{
      element.textContent=0;
      hold();
    }}
}
function hold(){
  if(statevar){
    var ele=document.querySelector('#score-' + activeplayer);
    var current=document.querySelector('#current-' + activeplayer);
    var total=Number(ele.textContent)+Number(current.textContent);
    if(total>100){

      document.querySelector('#name-'+activeplayer).textContent='WINNER';
      statevar=false;
    }
    ele.textContent=total;
    activeplayer++;
    activeplayer%=2;
    current.textContent=0;
    if(statevar){
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.player-0-panel').classList.toggle('active');
    }
  }
}
