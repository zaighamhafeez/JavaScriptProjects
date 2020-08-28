const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

populateUI();

// Pull data from local storage to build UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    
    if (selectedSeats !== null && selectedSeats.length > 0 ) {
        seats.forEach( (seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// console.log(typeof ticketPrice); >> to check type

//Function to update counts
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const countSelectedSeats = selectedSeats.length

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

   localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    

    count.innerText = countSelectedSeats;
    total.innerText = ticketPrice * countSelectedSeats;

}


// Function to save the selected movie and price

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}


// Event listenr for change on Select.
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})





// Event listner for Click on Availabel Seat.

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})


// Calculate intial number of seats and price.
updateSelectedCount();