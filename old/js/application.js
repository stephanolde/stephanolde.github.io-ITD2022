// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
     "http://project.3me.tudelft.nl/2013/wb46/game/212/1-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/2-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/3-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/4-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/5-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/6-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/7-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/8-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/9-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/10-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/212/11-212.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/1-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/2-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/3-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/4-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/5-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/6-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/7-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/8-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/9-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/10-114.gif",
"http://project.3me.tudelft.nl/2013/wb46/game/114/11-114.gif",


    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
