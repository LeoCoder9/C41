class Game {
    constructor() {

    }
    start() {
        if (gameState === 0) {


            form = new Form()
            form.display()

            player = new Player();
            player.getCount()

        }
        car1 = createSprite(100, 200)
        car2 = createSprite(300, 200)
        car3 = createSprite(500, 200)
        car4 = createSprite(700, 200)

        cars = [car1, car2, car3, car4]//cars[0],cars[1]

        car1.addImage("carImage", carIMG1)
        car2.addImage("carImage2", carIMG2)
        car3.addImage("carImage3", carIMG3)
        car4.addImage("carImage4", carIMG4)
    }
    readState() {
        var statecount = database.ref('gameState');
        statecount.on("value", (data) => {
            gameState = data.val()
        })
    }
    updateState(gcount) {
        database.ref('/').update({ gameState: gcount })
    }

    play() {



        form.hide()
        text("Game: Started!", 200, 50)
        Player.getPlayerInfo()
        player.getRank()
        background(groundIMG)
        image(trackIMG, 0, -displayHeight * 4, displayWidth, displayHeight * 5)

        if (allPlayers !== undefined) {
            var y
            var index = 0;
            var x = 190
            for (var plr in allPlayers) {
                x = x + 230

                y = displayHeight - allPlayers[plr].distance
                index = index + 1
                cars[index - 1].x = x
                cars[index - 1].y = y


                if (plr === "player" + player.index) {
                    cars[index - 1].shapeColor = "Red"
                    camera.position.x = displayWidth / 2
                    camera.position.y = cars[index - 1].y

                    fill("green")
                    stroke(17)
                    ellipse(cars[index - 1].x, cars[index - 1].y, 80, 80)
                }
                else {
                    cars[index - 1].shapeColor = "grey"
                }


            }

        }

        if (player.dis > 4170) {
            gameState = 2

            player.rank = player.rank +1
            Player.updateRank(player.rank)
        }

        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.dis = player.dis + 10
            player.update()
        }

        drawSprites()
    }

    end() {
        console.log(player.rank)
    }

}