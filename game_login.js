function addUser() {
    player1name=document.getElementById("input1").value;
    localStorage.setItem("playername1",player1name);

    player2name=document.getElementById("input2").value;
    localStorage.setItem("playername2",player2name);

    window.location="game_page.html";
}