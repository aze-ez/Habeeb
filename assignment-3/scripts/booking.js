const FULL_DAY_RATE = 35;
const HALF_DAY_RATE = 20;
let currentRate = FULL_DAY_RATE;
let selectedDays = [];

function updateTotalCost() {
    const totalCost = selectedDays.length * currentRate;
    document.getElementById('total-cost').innerText = `$${totalCost}`;
}

function toggleDay(day) {
    const index = selectedDays.indexOf(day);
    if (index === -1) {
        selectedDays.push(day);
    } else {
        selectedDays.splice(index, 1);
    }
    updateTotalCost();
}

function clearDays() {
    selectedDays = [];
    document.querySelectorAll('.day').forEach(day => day.classList.remove('clicked'));
    updateTotalCost();
}

function changeRate(rate) {
    currentRate = rate;
    updateTotalCost();
}

document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', function() {
        day.classList.toggle('clicked');
        toggleDay(day.value);
    });
});

document.getElementById('clear-days').addEventListener('click', clearDays);

document.getElementById('full-day').addEventListener('click', function() {
    changeRate(FULL_DAY_RATE);
});

document.getElementById('half-day').addEventListener('click', function() {
    changeRate(HALF_DAY_RATE);
});

updateTotalCost();
