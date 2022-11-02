// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// NEW
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// -importo il div id griglia nel JS
// -creazione div quadrato con funzione che andrà dentro griglia
// -stilizzazione CSS quadrato, flexato padre contenitore
// -ciclo for per creare tot quadrati e click col this
// -inserire numeri all'interno dei quadrati nel ciclo for
// -stilizzare numeri all'interno del quadrato (ANCORA DA CENTRARE)
// -funzione per far comparire i quadrati al click del btn



const griglia = document.getElementById('griglia');
console.log(griglia);

const btn = document.getElementById('btn');
btn.addEventListener('click', play)

function play(){

    griglia.classList.remove('d-none');
    griglia.classList.add('d-block');
    griglia.innerHTML = "";

    let select = document.getElementById('values');
    console.log(select);
    let opzioni = select.options[select.selectedIndex].value;
    switch(opzioni){
        case '1' :

          function creazioneQuadrato(){

              const div = document.createElement('div');
              div.classList.add('quadrato');
              return div;
    
          }
          console.log(creazioneQuadrato())
    
          for (let i=0; i<100; i++){
    
              var elementoCorrente = creazioneQuadrato();
        
    
              elementoCorrente.addEventListener('click', function(){
                  this.classList.toggle('attiva');
                  console.log(`${i+1}`)
              })
    
              let numeri = document.createElement("span");
              numeri.innerText = `${i+1}`;
    
              griglia.append(elementoCorrente);
              elementoCorrente.append(numeri);
          }

          let bombe = [];
          for( let y=0; y<16; y++ ){
            bombe.push(Math.round(Math.random()*100)+1)
            if 
          }
          console.log(bombe)



          break ;

        case '2' : 

          function creazioneQuadratoM(){

              const div = document.createElement('div');
              div.classList.add('quadratoM');
              return div;
    
          }
          console.log(creazioneQuadratoM())
          
    
          for (let i=0; i<81; i++){
    
              var elementoCorrenteM = creazioneQuadratoM();
        
    
              elementoCorrenteM.addEventListener('click', function(){
                  this.classList.toggle('attiva');
                  console.log(`${i+1}`)
              })
    
              let numeri = document.createElement("span");
              numeri.innerText = `${i+1}`;
    
              griglia.append(elementoCorrenteM);
              elementoCorrenteM.append(numeri);
          }
          break;

        case'3' : 

          function creazioneQuadratoH(){

              const div = document.createElement('div');
              div.classList.add('quadratoH');
              return div;
    
          }
          console.log(creazioneQuadratoH())
    
          for (let i=0; i<49; i++){
    
              var elementoCorrenteH = creazioneQuadratoH();
        
    
              elementoCorrenteH.addEventListener('click', function(){
                  this.classList.toggle('attiva');
                  console.log(`${i+1}`)
              })
    
              let numeri = document.createElement("span");
              numeri.innerText = `${i+1}`;
    
              griglia.append(elementoCorrenteH);
              elementoCorrenteH.append(numeri);
          }

          break ;
        }
    
}










