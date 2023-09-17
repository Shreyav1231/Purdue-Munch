// Poll data
let dish1Votes = 0;
let dish2Votes = 0;
let dish3Votes = 0;

// HTML elements
const dish1Btn = document.getElementById('dish1-btn');
const dish2Btn = document.getElementById('dish2-btn');
const dish3Btn = document.getElementById('dish3-btn');
const dish1Result = document.getElementById('dish1-result');
const dish2Result = document.getElementById('dish2-result');
const dish3Result = document.getElementById('dish3-result');
const dish1Progress = document.getElementById('dish1-progress');
const dish2Progress = document.getElementById('dish2-progress');
const dish3Progress = document.getElementById('dish3-progress');
const dish1Percentage = document.getElementById('dish1-percentage');
const dish2Percentage = document.getElementById('dish2-percentage');
const dish3Percentage = document.getElementById('dish3-percentage');

// Event listeners for voting buttons
dish1Btn.addEventListener('click', () => {
    dish1Votes++;
    updateResults();
});

dish2Btn.addEventListener('click', () => {
    dish2Votes++;
    updateResults();
});

dish3Btn.addEventListener('click', () => {
    dish3Votes++;
    updateResults();
});

// Function to update poll results
function updateResults() {
    const totalVotes = dish1Votes + dish2Votes + dish3Votes;
    const dish1PercentageValue = totalVotes === 0 ? 0 : (dish1Votes / totalVotes) * 100;
    const dish2PercentageValue = totalVotes === 0 ? 0 : (dish2Votes / totalVotes) * 100;
    const dish3PercentageValue = totalVotes === 0 ? 0 : (dish3Votes / totalVotes) * 100;

    dish1Progress.style.width = `${dish1PercentageValue}%`;
    dish2Progress.style.width = `${dish2PercentageValue}%`;
    dish3Progress.style.width = `${dish3PercentageValue}%`;

    dish1Percentage.textContent = `${dish1PercentageValue.toFixed(1)}%`;
    dish2Percentage.textContent = `${dish2PercentageValue.toFixed(1)}%`;
    dish3Percentage.textContent = `${dish3PercentageValue.toFixed(1)}%`;
}

// Initial update of results
updateResults();
