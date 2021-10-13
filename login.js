function add_user(){
    player_1_name=document.getElementById("player_1-name-input".value);
    player_2_name=document.getElementById("player_2-name-input".value);
    localStorage.setItem("player1_name",player_1_name);
    localStorage.setItem("player2_name",player_2_name);
    window.location.replace("mathpage.html");
