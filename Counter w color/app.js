// set initial count at 0 

let count = 0

// selct value and buttons 
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')


//checking which button is clicked and then modifying the value depending on the event occuring
btns.forEach(function(buttons){
    buttons.addEventListener ('click', function(e){
        const event = e.currentTarget.classList

        //adjusting the number depending on the button pressed 
        if (event.contains('decrease')){
            count--
        }else if (event.contains('reset')) {
            count = 0
        } else if (event.contains('increase')) {
            count++
        }
        //add style depending on if the number is higher or lower than 0
        if (count > 0){
            value.style.color = 'green'
        } 
        if (count < 0) {
            value.style.color = 'red'
        }

        if (count === 0) {
            value.style.color = '#222'
        }
        value.textContent = count
    })
})