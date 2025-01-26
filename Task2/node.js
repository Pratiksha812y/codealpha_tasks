let display = document.getElementById('display');
function onshow(value){
    if (display.value.length < 20){ 
        if (value === '.' && display.value.includes('.')) return; 
        display.value += value;
    }
}

function showClear(){
    display.value = '';
}

function calculate(){
    try{
        const result = new Function('return ' + display.value)(); 
        if(result === Infinity || isNaN(result)){
            throw new Error('Invalid operation');
        }
        display.value = result;
    } catch (error){
        display.value = 'Error';
        setTimeout(showClear, 1500); 
    }
}
document.addEventListener('keydown', function(event){
    const key = event.key;
    const operators = ['+', '-', '*', '/'];
    if (!isNaN(key) || operators.includes(key) || key === '.'){
        onshow(key);
    } else if (key === 'Enter'){
        calculate();
    } else if (key === 'Escape'){
        showClear();
    }
});
