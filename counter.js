var counterincrement = document.getElementById("incrementcounter");
var counterdecrement = document.getElementById("decrementcounter");
var valuetext = document.querySelector(".value");
var incrementvalue = document.getElementById("incrementvalue");
var resetbutton = document.getElementById("resetbutton");

counterincrement.addEventListener('click', () => {
    valuetext.textContent = parseInt(valuetext.textContent) + parseInt(incrementvalue.value); 
});

counterdecrement.addEventListener('click', () => {
    if(parseInt(valuetext.textContent) > 0){
        valuetext.textContent = parseInt(valuetext.textContent) - parseInt(incrementvalue.value);
    }
});

resetbutton.addEventListener('click', () => {
    valuetext.textContent = 0;
    incrementvalue.value = 1;
})
