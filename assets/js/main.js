
/***Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per 
i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:***/

// stamp numeri da 1 a 100
//multipli di 3 stampa fizz
//multipli 5 stampa fizzbuzz


//stampa 1-100

let numero =  document.getElementById('numero');
let i = 0;
for (let i = 0; i <= 100; i++ ){
     
     
     if ( i % 3 ==0  && i % 5=== 0){
        console.log('FizzBuzz');
    }else if ( i % 3 == 0 ) {
        console.log('Fizz')
    }else if ( i % 5 == 0 ) {
        console.log('Buzz')
    }else{
        console.log(i);
    }
   
    
}

//multipli di tre 

if ( i % 3 == 0){
    console.log('multiplo')
}else {
    console.log('non multiplo')
}


//numero.innerHTML += ` ${i} `;