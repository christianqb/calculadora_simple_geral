const display = document.getElementById("display");

function appendToDIsplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
// esse eval é praticamente toda a cabeça do codigo, vair ser responsavel por cacular tudo, INACRÉDITAVEL
function calculate(){
    try{
    display.value = eval(display.value); // eval, vai pegar os valores que estão no display e vai fazer as ações dele 
    }catch(error){
        display.value = "Error"; // para caso a TRy, não funcione o CATCH, vai rodar e mostrar na tela ERROR
    
    }
}