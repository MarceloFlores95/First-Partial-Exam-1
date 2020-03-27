function addSquare(){
    let fizzbuzz = document.getElementsByClassName("fizzBuzzNumber")
    let button = document.getElementById("submitBtn")
    console.log(button)
    button.addEventListener('click', (event) => {
        console.log(fizzbuzz)
    })
    
    
};
//The next step is to prevent reloading page,
//Save the number of the input 
//create number of square

function init() {
    addSquare()
};

init();