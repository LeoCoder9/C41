class Player {
    constructor() {
        this.dis = 0
        this.name = null
        this.index = null

        this.rank = null

    }
    getCount() {
        var plrCountRef = database.ref('playerCount');
        plrCountRef.on("value", (data) => {
            playerCount = data.val()
        });
    }
    updateCount(count) {
        database.ref('/').update({ playerCount: count })
    }
    update() {
        var playerindex = "players/player" + this.index;
        database.ref(playerindex).set({ names: this.name, distance: this.dis })

    }
    static getPlayerInfo() {
        var totalplrs = database.ref('players');
        totalplrs.on("value", (data) => {
            allPlayers = data.val()
        })
    }

    getRank(){
        var rankRef = database.ref('ranks')
        rankRef.on("value", (data) =>{
            this.rank = data.val()
        })
    }

    static updateRank(plrRANK){
        database.ref('/').update({ranks: plrRANK})
    }


}




