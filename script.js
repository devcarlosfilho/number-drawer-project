


function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if(min < max){
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        document.querySelector(".input-result").value = result
        
    } else{
        alert("O valor minimo deve ser menor que o valor máximo")
    }

    
    
}

