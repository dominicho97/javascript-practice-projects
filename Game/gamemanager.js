
let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();

  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Warrior":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Rogue":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Mage":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
        case "Hunter":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
     getInterface.innerHTML = '<img src="img/avatar-players/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType
      +'</h3><p>Health: '+ player.health + '</p><p>Mana: ' + player.mana + '</p><p>Agility: ' + player.agility+ '</p><p>Speed: ' + player.speed + '</p></div>' ;   
},
setPreFight: function() {

  let getHeader = documentquerySelector(".header");
  let getActions = documentquerySelector(".actions");
  let getarena = documentquerySelector(".arena");
  getHeader.innerHTML = '<p>Task: Find an enemy!</p>'

  }
}