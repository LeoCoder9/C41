class Form {
    constructor() {
        this.name = createInput("Input your name");
        this.welcome = createElement('h2');
        this.button = createButton("Enter the game");

        this.reset = createButton("RESET DATABASE")
    }
    display() {
        var title = createElement('h1');
        title.html("CAR RACING GAME!");
        title.position(displayWidth/2 + 150, 0);

        
        this.name.position(displayWidth/2 +250, displayHeight/2-80);

       
        this.button.position(displayWidth/2 +280, displayHeight/2);

        this.reset.position(displayWidth/2 -250, 30)

       this.button.mousePressed( ()=> {
            this.name.hide()
            this.button.hide()

            player.name = this.name.value()
            this.welcome.html("Welcome! " + player.name)
            this.welcome.position(displayWidth/2 - 70, displayHeight/4)
            playerCount = playerCount+1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

        })

        this.reset.mousePressed(()=>{
            var plrRef = database.ref('players')
            plrRef.remove()

            player.updateCount(0)

            game.updateState(0)
        })

        


    }
    hide(){
        this.name.hide()
        this.button.hide()
        this.welcome.hide()
    }

  
}