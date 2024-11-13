function submitFlag(challengeId) {
    const flagInput = document.getElementById(`flag${challengeId}`).value;
    
    // Mock fetch call - replace URL with backend endpoint
    fetch(`/submit_flag`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challengeId, flag: flagInput })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Correct flag! Points awarded.");
        } else {
            alert("Incorrect flag, try again.");
        }
    })
    .catch(error => console.error("Error:", error));
}

function loadLeaderboard() {
    fetch(`/get_leaderboard`)
    .then(response => response.json())
    .then(data => {
        const leaderboardSection = document.getElementById("leaderboard");
        leaderboardSection.innerHTML = "<ul>" + data.map(user => 
            `<li>${user.username}: ${user.score} points</li>`
        ).join("") + "</ul>";
    })
    .catch(error => console.error("Error:", error));
}

// Call function on page load
if (document.getElementById("leaderboard")) loadLeaderboard();
