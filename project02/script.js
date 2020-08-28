const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

// console.log(typeof ticketPrice); >> to check type

//Function to update counts
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const countSelectedSeats = selectedSeats.length

    count.innerText = countSelectedSeats;
    total.innerText = ticketPrice * countSelectedSeats;

}


// Event listenr for change on Select.
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})





// Event listner for Click on Availabel Seat.

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})


