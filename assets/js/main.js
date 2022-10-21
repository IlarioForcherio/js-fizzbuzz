
/***Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per 
i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:***/

// stamp numeri da 1 a 100
//multipli di 3 stampa fizz
//multipli 5 stampa fizzbuzz



let numeroElementoHtml = document.getElementById('numero');
//let FizzBuzz = document.getElementById('fizz-buzz');
//let Fizz = document.getElementById('fizz');
//let Buzz = document.getElementById('buzz');


for (let i = 0; i <= 100; i++ ){
    numeroElementoHtml.innerHTML += ` ${i} `;
    
     
     if ( i % 3 ==0  && i % 5=== 0){
        console.log('FizzBuzz');
        numeroElementoHtml.innerText += `FizzBuzz`;
        
        
        
    }else if ( i % 3 == 0 ) {
        numeroElementoHtml.innerText += `Fizz`;
        console.log('Fizz')
    }else if ( i % 5 == 0 ) {
        numeroElementoHtml.innerText += `Buzz`;
        console.log('Buzz')
    }else{
        console.log(i);
    }
    let = document.getElementById('parent');
    

   // console.log(FizzBuzz)
   // div.append(FizzBuzz)

} 


//const FizzBuzz = document.createElement("div")
//console.log(FizzBuzz)
//FizzBuzz.append(numeroElementoHtml)





