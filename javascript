function addToFriendsBoard() {
    const friendList = document.getElementById("friendList");
    const friendItem = document.createElement("div");
    friendItem.textContent = `${name}: ${score}/${questions.length}`;
    friendList.appendChild(friendItem);

    // Save the Friends Board data to local storage
    const friendsData = JSON.parse(localStorage.getItem("friendsData")) || [];
    friendsData.push({ name, score: `${score}/${questions.length}` });
    localStorage.setItem("friendsData", JSON.stringify(friendsData));
}

function loadFriendsBoard() {
    const friendList = document.getElementById("friendList");
    friendList.innerHTML = ""; // Clear existing friend list

    // Load Friends Board data from local storage
    const friendsData = JSON.parse(localStorage.getItem("friendsData")) || [];
    friendsData.forEach(friend => {
        const friendItem = document.createElement("div");
        friendItem.textContent = `${friend.name}: ${friend.score}`;
        friendList.appendChild(friendItem);
    });
}

window.onload = function() {
    loadFriendsBoard(); // Load Friends Board data when the page loads
};
      
